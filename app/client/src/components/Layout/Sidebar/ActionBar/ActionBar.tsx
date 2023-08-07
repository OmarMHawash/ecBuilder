import React from 'react'
import { Link } from 'react-router-dom'
import './ActionBar.scss'
const ActionBar = () => {
  return (
    <div className="action-panel back">
      <div className="upper-panel">
        <div className="action-header">
          <Link
            to="/"
            className="ml-4 toggleColour text-white no-underline hover:no-underline font-bold"
          >
            <h4>Home</h4>
          </Link>
        </div>
        <div className="panel-list">
          <ul>
            <li>
              <Link className="p-item" to="/quick-start">
                <h5>Projects</h5>
              </Link>
            </li>
            <li>
              <Link className="p-item" to="/palettes">
                <h5>Palettes</h5>
              </Link>
            </li>
            <li>
              <Link className="p-item" to="/components">
                <h5>Components</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="panel-bottom">
        <ul>
          <li>
            <Link className="p-item" to="/website">
              <h5>Config</h5>
            </Link>
          </li>
        </ul>
        <br />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default ActionBar
