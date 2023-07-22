import React from 'react'
import { Button } from '../../Elements/ButtonE'
import './CenterAction.scss'

const CenterAction = (props: any): JSX.Element => {
  // const [data, setData] = useState({ name: '', description: '', error: '' })
  const { name } = props

  const getData = (): void => {
    console.log('getting data')
  }

  return (
    <div className="center-action prim">
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
        {/* <p>Name: {data.name}</p>
        <p>Description: {data.description}</p> */}
      </div>
    </div>
  )
}

export default CenterAction
