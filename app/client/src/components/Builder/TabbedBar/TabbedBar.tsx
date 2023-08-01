import React, { useState, useContext } from 'react'
import TabsE from '../../Elements/TabsE'
import { Tabs } from '../../ui/tabs'
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { userContext } from '../../../contexts/userContext'
import './TabbedBar.scss'

const TabbedBar = (): JSX.Element => {
  const [headVis, setHeadVis] = useState('')
  const [footVis, setFootVis] = useState('')
  const { user, setUser } = useContext(userContext)

  const handleChange = (e: any, cKind: string) => {
    let value = e.target.value
    if (cKind === 'header') {
      setHeadVis(value)
    } else {
      setFootVis(value)
    }
    if (value !== '') {
      let newComponents = [...user.components]
      newComponents.map((item, idx): any => {
        if (item.name === value) {
          item.visible = true
        }
        if (item.kind === cKind && item.name !== value) {
          item.visible = false
        }
        return item
      })
      const newUser = { ...user, components: newComponents }
      // console.log('newUser', newUser)
      setUser(newUser)
    }
  }

  return (
    <div className="tabbed-bar">
      <select
        value={headVis}
        onChange={(e) => {
          handleChange(e, 'header')
        }}
      >
        <option value="">Select</option>
        <option value="headerA">Header 1</option>
        <option value="headerB">Header 2</option>
      </select>
      <select
        value={footVis}
        onChange={(e) => {
          handleChange(e, 'footer')
        }}
      >
        <option value="">Select</option>
        <option value="footerA">Footer 1</option>
        <option value="footerB">Footer 2</option>
      </select>
      {/* <Tabs defaultValue="    ">
        <TabsList className="grid w-full grid-cols-3 secd">
          <TabsTrigger value="XA">XA</TabsTrigger>
          <TabsTrigger value="BY">BY</TabsTrigger>
        </TabsList>
        <TabsE title="XA" img="" description="" />
        <TabsE title="BY" img="" description="" />
      </Tabs> */}
    </div>
  )
}

export default TabbedBar
