import PalettesD from '../../components/Dashboard/Palettes/PalettesD'
import PanelHeader from '../../components/Builder/PanelHeader/PanelHeader'
import ActionBar from '../../components/Layout/Sidebar/ActionBar/ActionBar'
import React from 'react'

const Palettes = (): JSX.Element => {
  return (
    <div className="quick-start">
      <div className="quick-start-wrapper">
        <ActionBar />
        <div className="quick-start-content">
          <PanelHeader />
          <PalettesD />
        </div>
      </div>
    </div>
  )
}

export default Palettes
