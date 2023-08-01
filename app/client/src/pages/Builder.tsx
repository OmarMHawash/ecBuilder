import React from 'react'
import BuilderBar from '../components/Layout/Sidebar/BuilderBar/BuilderBar'

const Builder = (): JSX.Element => {
  return (
    <div id="builder-section">
      <div id="builder-sidebar">
        <BuilderBar />
      </div>
      <div id="builder-content"></div>
    </div>
  )
}

export default Builder
