import React from 'react'
import Projects from '../components/QuickStart/Projects/Projects'
import ActionBar from '../components/Layout/Sidebar/ActionBar/ActionBar'
import PanelHeader from '../components/Builder/PanelHeader/PanelHeader'

const QuickStart = (): JSX.Element => {
  return (
    <div className="quick-start">
      <div className="quick-start-wrapper">
        <ActionBar />
        <div className="quick-start-content">
          <PanelHeader />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default QuickStart
