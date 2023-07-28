import React from 'react'
import { Button } from '../components/Elements/ButtonE'

const Home = (): JSX.Element => {
  return (
    <main>
      <div className="home-wrapper">
        <div className="vertical-wrapper">
          <h1>Create Your Website within seconds</h1>
          <p>Now Faster That Ever! Fully Featured Contentful React UI</p>
          <div className="action-buttons">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Features</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
