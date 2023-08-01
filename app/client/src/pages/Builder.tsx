import React, { useContext, useState } from 'react'
import BuilderBar from '../components/Layout/Sidebar/BuilderBar/BuilderBar'
import { userContext } from '../contexts/userContext'

const Builder = (): JSX.Element => {
  const [components, setComponents] = useState(useContext(userContext).user.components)

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
