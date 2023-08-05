import ComponentsD from '../../components/Dashboard/Components/ComponentsD'
import PanelHeader from '../../components/Builder/PanelHeader/PanelHeader'
import ActionBar from '../../components/Layout/Sidebar/ActionBar/ActionBar'
import React from 'react'

const Components = (): JSX.Element => {
  return (
    <div className="quick-start">
      <div className="quick-start-wrapper">
        <ActionBar />
        <div className="quick-start-content">
          <PanelHeader />
          <ComponentsD />
        </div>
      </div>
    </div>
  )
}

export default Components
