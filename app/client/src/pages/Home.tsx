import React from 'react'
import { Button } from '../components/Elements/ButtonE'
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <main>
      <div className="home-wrapper">
        <div className="vertical-wrapper">
          <h1>Create Your Website within seconds</h1>
          <p>Now Faster Than Ever, Fully Featured Contentful React UI</p>
          <div className="action-buttons">
            <Link to="/quick-start">
              <Button variant="default">Get Started</Button>
            </Link>
            <Link to="/features">
              <Button variant="outline">Features</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
