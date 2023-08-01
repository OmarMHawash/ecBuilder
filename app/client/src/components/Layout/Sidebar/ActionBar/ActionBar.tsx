import React from 'react'
import { Link } from 'react-router-dom'
import './ActionBar.scss'
const ActionBar = () => {
  return (
    <div className="action-panel">
      <div className="upper-panel">
        <div className="action-header">
          <Link
            to="/"
            className="ml-4 toggleColour text-white no-underline hover:no-underline font-bold text-lg lg:text-2xl"
          >
            Home
          </Link>
        </div>
        <div className="panel-list">
          <ul>
            <li>
              <Link className="p-item" to="/quick-start">
                <h3>💡 Projects</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="panel-bottom">
        <button>Logout</button>
      </div>
    </div>
  )
}

export default ActionBar
