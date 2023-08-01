import React, { useContext, useState, useEffect } from 'react'
import BuilderBar from '../components/Layout/Sidebar/BuilderBar/BuilderBar'
import { userContext } from '../contexts/userContext'

const Builder = (): JSX.Element => {
  const [components, setComponents] = useState(useContext(userContext).user.components)
  // useEffect(() => {
  //   // loadComponents()
  // }, [components])

  // const loadComponents = () => {
  //   let newComponents = [...components]
  //   newComponents.map((Item, idx): any => {
  //     // @ts-ignore
  //     Item.visible = comVis[Item.name].visible
  //     return Item
  //   })
  //   setComponents(newComponents)
  // }

  // const handleHead = (e: any) => {
  //   let value = e.target.value
  //   setHeadVis(value)
  //   let newComVis = { ...comVis }
  //   // @ts-ignore
  //   newComVis[value].visible = !newComVis[value].visible
  //   setComVis(newComVis)
  //   console.log('comVis', comVis)
  // }

  return (
    <div id="builder-section">
      <div id="builder-sidebar">
        <BuilderBar />
      </div>
      <div id="builder-content">
        {/* @ts-ignore */}
        {components.map((Item, idx) => Item.visible && <Item.Value key={idx} />)}
      </div>
    </div>
  )
}

export default Builder
