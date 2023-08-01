import React from 'react'
import { Button } from '../components/Elements/ButtonE'
import { Link } from 'react-router-dom'
import Features from '../components/Home/Features/Features'

const Home = (): JSX.Element => {
  return (
    <>
      <div className="home-wrapper">
        <div className="vertical-wrapper">
          <h1>Create Your Website within seconds</h1>
          <p>Now Faster Than Ever, Fully Featured Contentful React UI</p>
          <div className="action-buttons">
            <Link to="/quick-start">
              <Button variant="default">Get Started</Button>
            </Link>
            <a href="#features">
              <Button variant="outline">Features</Button>
            </a>
          </div>
        </div>
      </div>
      <Features />
    </>
  )
}

export default Home
