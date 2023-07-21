import React, { useState, useEffect, useContext } from 'react'
import { paletteContext } from '../../../contexts/PaletteContext'
import { paletteDefaults } from '../../../utils/defaults'
import { Button } from '../../Elements/ButtonE'
import { get } from '../../../utils/api'
import type { Palette } from '@/src/types/palette'
import './UpdateStyles.scss'

const UpdateStyles = (): JSX.Element => {
  const [ec1, setEc1] = useState('')
  const [ec2, setEc2] = useState('')
  const [ec3, setEc3] = useState('')
  const [ec4, setEc4] = useState('')
  const { setPalette } = useContext(paletteContext)

  useEffect(() => {
    fillInputs(paletteDefaults)
  }, [])

  const fillInputs = (obj: Palette): void => {
    setEc1(obj.back)
    setEc2(obj.prim)
    setEc3(obj.secd)
    setEc4(obj.text)
  }
  const updateStyles = (e: any): void => {
    e.preventDefault()
    const styleObj = {
      back: ec1,
      prim: ec2,
      secd: ec3,
      text: ec4,
      accn: paletteDefaults.accn,
    }
    console.log('updated:', styleObj)
    setPalette(styleObj)
  }

  // @ts-ignore
  const resetStyles = async (e: any): void => {
    e.preventDefault()
    let styleObj: Palette
    await get('/palettes').then((res) => {
      styleObj = {
        back: res[0].background,
        prim: res[0].primary,
        secd: res[0].secondary,
        text: res[0].text,
        accn: res[0].accent,
      }
      // console.log(styleObj)
      setPalette(styleObj)
      fillInputs(styleObj)
    })
  }

  return (
    <div className="update-form l2-back">
      <h2>Update Styles</h2>
      <form>
        <div className="input-feild">
          <label htmlFor="ec1">#1 Color</label>
          <input
            type="text"
            name="ec1"
            id="ec1"
            value={ec1}
            onChange={(e) => {
              setEc1(e.target.value)
            }}
          />
        </div>
        <div className="input-feild">
          <label htmlFor="prim">#2 Color</label>
          <input
            type="text"
            name="prim"
            id="prim"
            value={ec2}
            onChange={(e) => {
              setEc2(e.target.value)
            }}
          />
        </div>
        <div className="input-feild">
          <label htmlFor="secd">#3 Color</label>
          <input
            type="text"
            name="secd"
            id="secd"
            value={ec3}
            onChange={(e) => {
              setEc3(e.target.value)
            }}
          />
        </div>
        <div className="input-feild">
          <label htmlFor="text">#4 Color</label>
          <input
            type="text"
            name="text"
            id="text"
            value={ec4}
            onChange={(e) => {
              setEc4(e.target.value)
            }}
          />
        </div>
        <div className="action-buttons">
          <div onClick={updateStyles}>
            <Button variant="outline">UPDATE</Button>
          </div>
          <div onClick={resetStyles}>
            <Button title="default">get Defaults </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateStyles
