import React, { useEffect } from 'react'
import ProjectSheet from '../../Sheets/ProjectSheet'
import { Webapp } from '@/src/types/types'
import { Link } from 'react-router-dom'
import WebAppDrop from '../../DropDowns/WebAppDrop'
import CardE from '../../Elements/CardE'
import { get } from '../../../utils/api'

import './Projects.scss'
const Projects = (): JSX.Element => {
  const [webapps, setWebapps] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  useEffect(() => {
    getWebapps()
  }, [])

  const getWebapps = () => {
    // @ts-ignore
    ;(async () => {
      await get('/webapps')
        .then((res) => {
          setWebapps(res)
        })
        .then(() => {
          setLoaded(true)
        })
    })()
  }
  return (
    <div className="projects-section">
      <div className="projects-header">
        <h2>Your projects: </h2>
        <ProjectSheet />
      </div>
      <div className="projects">
        <div className="projects-wrapper">
          {loaded ? (
            webapps.map((item: Webapp) => (
              <div className="project-card" key={item.name}>
                <Link to={`/project/${item.id}`} className="card-wrapper">
                  <CardE
                    title={item.name}
                    desc={item.description}
                    content={item.logo}
                    footer=""
                    href={`/project/${item.id}`}
                  />
                </Link>
                <div className="dropd">
                  <WebAppDrop webapp={item} />
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
