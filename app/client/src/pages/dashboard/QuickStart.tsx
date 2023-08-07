import React from 'react'
import ProjectsD from '../../components/Dashboard/Projects/ProjectsD'
import ActionBar from '../../components/Layout/Sidebar/ActionBar/ActionBar'
import PanelHeader from '../../components/Builder/PanelHeader/PanelHeader'

const QuickStart = (): JSX.Element => {
  return (
    <div className="quick-start">
      <div className="quick-start-wrapper">
        <ActionBar />
        <div className="quick-start-content">
          <PanelHeader />
          <ProjectsD />
        </div>
      </div>
    </div>
  )
}

export default QuickStart
