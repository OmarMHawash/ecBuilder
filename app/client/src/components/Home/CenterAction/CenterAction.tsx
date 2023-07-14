import React, { useState } from 'react'
import axios from 'axios'
import './CenterAction.scss'
import { Button } from '../../Elements/ButtonE'

const CenterAction = (props: any): JSX.Element => {
  const [data, setData] = useState({ name: '', description: '', error: '' })
  const { name } = props

  const getData = (): void => {
    console.log('getting data')
    axios
      .get('http://localhost:8000/api/v1/header')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setData({ ...data, error: 'Error getting data' })
        console.log(err)
      })
  }

  return (
    <div className="center-action l2-back">
      <div className="action-form">
        <h1>Center Action</h1>
        <br />
        <div onClick={getData}>
          <Button>{name}</Button>
        </div>
      </div>
      <div className="action-data">
        <h2>
          <b>Data:</b>
        </h2>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
      </div>
    </div>
  )
}

export default CenterAction
