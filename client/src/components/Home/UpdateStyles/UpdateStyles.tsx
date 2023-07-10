import React, { useState, useEffect, useContext } from 'react'
import { paletteContext } from '../../../contexts/PaletteContext'
import Button from '../../Elements/Button/Button'
import { paletteDefaults } from '../../../utils/defaults'
import './UpdateStyles.scss'

const UpdateStyles = (): JSX.Element => {
  const [ec1, setEc1] = useState('')
  const [ec2, setEc2] = useState('')
  const [ec3, setEc3] = useState('')
  const [ec4, setEc4] = useState('')
  const { setPalette } = useContext(paletteContext)

  useEffect(() => {
    fillInputs()
  }, [])

  const fillInputs = (): void => {
    setEc1(paletteDefaults.ecL1)
    setEc2(paletteDefaults.ecL2)
    setEc3(paletteDefaults.ecL3)
    setEc4(paletteDefaults.ecL4)
  }
  const updateStyles = (e: any): void => {
    e.preventDefault()
    const styleObj = {
      ecL1: ec1,
      ecL2: ec2,
      ecL3: ec3,
      ecL4: ec4,
    }
    console.log(styleObj)
    setPalette(styleObj)
  }

  const resetStyles = (e: any): void => {
    e.preventDefault()
    const styleObj = paletteDefaults
    fillInputs()
    setPalette(styleObj)
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
          <label htmlFor="ecL2">#2 Color</label>
          <input
            type="text"
            name="ecL2"
            id="ecL2"
            value={ec2}
            onChange={(e) => {
              setEc2(e.target.value)
            }}
          />
        </div>
        <div className="input-feild">
          <label htmlFor="ecL3">#3 Color</label>
          <input
            type="text"
            name="ecL3"
            id="ecL3"
            value={ec3}
            onChange={(e) => {
              setEc3(e.target.value)
            }}
          />
        </div>
        <div className="input-feild">
          <label htmlFor="ecL4">#4 Color</label>
          <input
            type="text"
            name="ecL4"
            id="ecL4"
            value={ec4}
            onChange={(e) => {
              setEc4(e.target.value)
            }}
          />
        </div>
        <div className="action-buttons">
          <div onClick={updateStyles}>
            <Button title="UPDATE" />
          </div>
          <div onClick={resetStyles}>
            <Button title="default" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateStyles
