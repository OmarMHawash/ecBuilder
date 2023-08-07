import React, { useState, useEffect, useContext } from 'react'
import { Button } from '../../Elements/ButtonE'
import { get } from '../../../utils/api'
import type { Palette } from '@/src/types/types'
import { paletteContext } from '../../../contexts/PaletteContext'
import './UpdateStyles.scss'

const UpdateStyles = (): JSX.Element => {
  const [ec1, setEc1] = useState('')
  const [ec2, setEc2] = useState('')
  const [ec3, setEc3] = useState('')
  const [ec4, setEc4] = useState('')
  const [ec5, setEc5] = useState('')
  const { setPalette, palette } = useContext(paletteContext)

  useEffect(() => {
    fillInputs(palette)
  }, [])

  useEffect(() => {
    updateStyles('effect')
  }, [ec1, ec2, ec3, ec4, ec5])

  const fillInputs = (obj: Palette): void => {
    setEc1(obj.back)
    setEc2(obj.prim)
    setEc3(obj.secd)
    setEc4(obj.text)
    setEc5(obj.accn)
  }
  const updateStyles = (e: any): void => {
    e !== 'effect' && e.preventDefault()
    const styleObj = {
      back: ec1,
      prim: ec2,
      secd: ec3,
      text: ec4,
      accn: ec5,
      name: '',
    }
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
        name: res[0].name,
      }
      setPalette(styleObj)
      fillInputs(styleObj)
    })
  }

  return (
    <div className="update-form">
      <form>
        <h4>{palette.name}</h4>
        <div className="input-feild">
          <div className="label-wrapper">
            <div className="color-circle back"> </div>
            <label htmlFor="back">Background</label>
          </div>
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
          <div className="label-wrapper">
            <div className="color-circle prim"> </div>
            <label htmlFor="prim">Primary</label>
          </div>
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
          <div className="label-wrapper">
            <div className="color-circle secd"> </div>
            <label htmlFor="secd">Secondary</label>
          </div>
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
          <div className="label-wrapper">
            <div className="color-circle text"> </div>
            <label htmlFor="text">Text</label>
          </div>
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
        <div className="input-feild">
          <div className="label-wrapper">
            <div className="color-circle accn"> </div>
            <label htmlFor="accn">Accent</label>
          </div>
          <input
            type="text"
            name="accn"
            id="accn"
            value={ec5}
            onChange={(e) => {
              setEc5(e.target.value)
            }}
          />
        </div>
        <div className="action-buttons">
          <div onClick={updateStyles}>
            {/* <button type="submit" onSubmit={updateStyles}>
              Update
            </button> */}
          </div>
          <div onClick={resetStyles}>
            <Button title="default">Defaults</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateStyles
