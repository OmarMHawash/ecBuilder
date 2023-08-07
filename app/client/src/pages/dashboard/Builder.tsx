/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BuilderBar from '../../components/Layout/Sidebar/BuilderBar/BuilderBar'
import { userContext } from '../../contexts/userContext'
import { get } from '../../utils/api'
import { paletteContext } from '../../contexts/PaletteContext'

const Builder = (): JSX.Element => {
  const location = useLocation()
  const [metaData, setMetaData] = useState({
    title: '',
    description: '',
    mini_desc: '',
    logo: '',
    palette_id: 0,
  })
  const [components, setComponents] = useState([])

  const [project, setProject] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const { setUser, user } = useContext(userContext)
  const { setPalette } = useContext(paletteContext)
  const projectId = location.pathname.split('/')[2]

  window.addEventListener('beforeunload', (ev) => {
    ev.preventDefault()
    return (ev.returnValue = 'Are you sure you want to close?')
  })

  useEffect(() => {
    getProject()
  }, [])

  const getProject = async () => {
    await get(`/webapps/${projectId}`)
      .then((res) => {
        const metaData = {
          title: res.name,
          description: res.description,
          mini_desc: res.mini_description,
          logo: res.logo,
          palette_id: res.palette_id,
        }
        setMetaData(metaData)
        getPalette(res.palette_id)
      })
      .then(() => {
        getActiveComponents()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getPalette = async (paletteId: number) => {
    await get(`/palettes/${paletteId}`)
      .then((res) => {
        const paletteObj = {
          prim: res.primary,
          secd: res.secondary,
          accn: res.accent,
          back: res.background,
          text: res.text,
          name: res.name,
        }
        setPalette(paletteObj)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getActiveComponents = async () => {
    await get(`/active_components/${projectId}`)
      .then((res) => {
        const newComponents = res.map((item: any, idx: number) => {
          const newItem = {
            id: item.id,
            name: item.name,
            Value: user.components[idx].Value,
            kind: item.kind,
            visible: item.visible,
          }
          return newItem
        })
        // console.log('newComponents', newComponents)
        setComponents(newComponents)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (components[0] && metaData.title) {
      setUser({ components, metaData })
      setProject(1)
    }
  }, [metaData, components])

  useEffect(() => {
    project && setLoaded(true)
  }, [project])

  return (
    <div id="builder-section">
      {loaded ? (
        <>
          <div id="builder-sidebar">
            <BuilderBar />
          </div>
          <div id="builder-content">
            {/* @ts-ignore */}
            {components?.map((Item, idx) => Item.visible && <Item.Value key={idx} />)}
          </div>
        </>
      ) : (
        <h2> Loading project data...</h2>
      )}
    </div>
  )
}

export default Builder

// await get(`/components_webapps/${projectId}`)
//       .then((res) => {
//         console.log('res', res)
//         console.log('components', components)
//         const newComponents = components.map((item: any) => {
//           const newItem = {
//             ...item,
//             visible: res.some((el: any) => el.component_id === item.id) ? true : false,
//           }
//           console.log(res.some((el: any) => el.component_id === item.id))
//           return newItem
//         })
//         console.log('newComponents', newComponents)
//         // @ts-ignore
//         setActiveComponents(true)
//         // @ts-ignore
//         setComponents(newComponents)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
