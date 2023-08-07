import React, { useEffect } from 'react'
import { Component } from '@/src/types/types'
import { Link } from 'react-router-dom'
// import ComponentDrop from '../../DropDowns/ComponentDrop'
import CardE from '../../Elements/CardE'
import { get } from '../../../utils/api'

import '../Dashboard.scss'
import './Components.scss'
import ComponentSheet from '../../Sheets/ComponentSheet'
const ComponentsD = (): JSX.Element => {
  const [components, setComponents] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  useEffect(() => {
    getComponents()
  }, [])

  const getComponents = () => {
    // @ts-ignore
    ;(async () => {
      await get('/components')
        .then((res) => {
          setComponents(res)
          console.log(res)
        })
        .then(() => {
          setLoaded(true)
        })
    })()
  }
  return (
    <div className="dashboard-section">
      <div className="dashboard-header">
        <h3>Components: </h3>
        <ComponentSheet />
      </div>
      <div className="dashboard">
        <div className="dashboard-wrapper components">
          {loaded ? (
            components.map((component: any) => {
              return (
                <Link to="/quick-start" className="comp-card">
                  <CardE
                    title={component.name}
                    desc={component.kind}
                    content=""
                    footer={'#' + component.id}
                    href=""
                  />
                </Link>
              )
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ComponentsD
