import React, { useState, useContext } from 'react'
import { userContext } from '../../../contexts/userContext'
import { Button } from '../../Elements/ButtonE'
import './TabbedBar.scss'
import { useLocation } from 'react-router-dom'
import { paletteContext } from '../../../contexts/PaletteContext'
import { toast } from '../../ui/use-toast'
import { put } from '../../../utils/api'

const TabbedBar = (): JSX.Element => {
  const [headVis, setHeadVis] = useState('')
  const [footVis, setFootVis] = useState('')
  const [cardsVis, setCardsVis] = useState('')
  const [tabsVis, setTabsVis] = useState('')
  const [heroVis, setHeroVis] = useState('')
  const [accordionVis, setAccordionVis] = useState('')
  const { user, setUser } = useContext(userContext)
  const { palette } = useContext(paletteContext)
  const projectId = useLocation().pathname.split('/')[2]

  const handleChange = (e: any, cKind: string) => {
    let value = e.target.value
    let checked = e.target.checked
    if (value !== 'select') {
      let newComponents = [...user.components]
      if (value !== 'value') {
        if (cKind === 'header') {
          setHeadVis(value)
        } else if (cKind === 'footer') {
          setFootVis(value)
        }
        newComponents.map((item, idx): any => {
          if (item.name === value) {
            item.visible = true
          }
          if (item.kind === cKind && item.name !== value) {
            item.visible = false
          }
          return item
        })
      }
      if (checked !== undefined) {
        if (cKind === 'cards') {
          setCardsVis(checked)
        } else if (cKind === 'tabs') {
          setTabsVis(checked)
        } else if (cKind === 'accordion') {
          setAccordionVis(checked)
        } else if (cKind === 'hero') {
          setHeroVis(checked)
        }
        newComponents.map((item, idx): any => {
          if (item.name === cKind) {
            item.visible = checked
          }
          return item
        })
      }
      const newUser = { ...user, components: newComponents }
      console.log('newUser', newUser)
      setUser(newUser)
    }
  }

  const handleSave = async () => {
    console.log('handleSave - ', user)
    toast({
      title: 'Saving...',
    })
    const paletteId = user.metaData.palette_id
    const paletteData = {
      primary: palette.prim,
      secondary: palette.secd,
      accent: palette.accn,
      background: palette.back,
      text: palette.text,
    }
    await put(`/palettes/${paletteId}`, paletteData)
      .then((res) => {
        console.log(res)
        toast({
          title: 'Saved successfully...',
        })
        updateComponents()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateComponents = async () => {}

  return (
    <div className="tabbed-bar">
      <h3>Tabbed Bar</h3>
      <div className="selects">
        <label htmlFor="header">Header </label>
        <select
          value={headVis}
          onChange={(e) => {
            handleChange(e, 'header')
          }}
        >
          <option value="select">Select</option>
          <option value="headerA">Header 1</option>
          <option value="headerB">Header 2</option>
        </select>
        <br />
        <input
          type="checkbox"
          value={heroVis}
          name="hero"
          onChange={(e) => {
            handleChange(e, 'hero')
          }}
        />
        <label htmlFor="hero"> hero</label>
        <br />
        <input
          type="checkbox"
          value={cardsVis}
          name="cards"
          onChange={(e) => {
            handleChange(e, 'cards')
          }}
        />
        <label htmlFor="cards"> cards</label>
        <br />
        <input
          type="checkbox"
          value={tabsVis}
          name="tabbed"
          onChange={(e) => {
            handleChange(e, 'tabbed')
          }}
        />
        <label htmlFor="tabs"> tabbed</label>
        <br />
        <input
          type="checkbox"
          value={accordionVis}
          name="accordions"
          onChange={(e) => {
            handleChange(e, 'accordions')
          }}
        />
        <label htmlFor="accordion"> accordions</label>
        <br />
      </div>
      <label htmlFor="footer">Footer </label>
      <select
        value={footVis}
        onChange={(e) => {
          handleChange(e, 'footer')
        }}
      >
        <option value="">Select</option>
        <option value="footerA">Footer 1</option>
        <option value="footerB">Footer 2</option>
        {/* radio element */}
      </select>
      <div className="buttons">
        <Button onClick={handleSave} variant="secondary">
          Save
        </Button>
        <a href={`http://localhost:8000/api/v1/webapps/${projectId}/download`}>
          <Button
            variant="destructive"
            onClick={() => {
              toast({
                title: 'Starting File Download...',
              })
            }}
          >
            Download
          </Button>
        </a>
      </div>
    </div>
  )
}

export default TabbedBar
