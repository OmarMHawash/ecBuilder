import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardE from '../components/Elements/CardE'
// import { useToast } from '../components/ui/use-toast'
import WebAppDrop from '../components/DropDowns/WebAppDrop'
import { get } from '../utils/api'
import type { Webapp } from '../types/types'
import ProjectSheet from '../components/Sheets/ProjectSheet'

const QuickStart = (): JSX.Element => {
  const [webapps, setWebapps] = useState([])
  const [loaded, setLoaded] = useState(false)
  // const { toast }: any = useToast()

  useEffect(() => {
    getWebapps()
  }, [])

  const getWebapps = () => {
    // @ts-ignore
    ;(async () => {
      await get('/webapps')
        .then((res) => {
          console.log(res)
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

export default QuickStart
