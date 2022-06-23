import React from 'react'
import hard from '../assets/hard.png'
import Dcity from '../assets/Detroit.png'
import Htown from '../assets/Houstoncity.png'
import Ralcity from '../assets/Raleigh.png'
import Austcity from '../assets/austin.png'
import { Link } from 'react-router-dom'
function Home(props) {
  return (
    <div>
      <div className="container">
        <header>
          <img src={hard} alt="HARD Logo" width="600px" />
        </header>
        <Link className="houston" to="/houston">
          <div>
            houston <img src={Htown} alt="Houston" width="200px" height={150} />
          </div>
        </Link>
        <div id="new">
          <Link to="/new">
            <button className="new">Add New Restraunt</button>
          </Link>
        </div>
        <Link className="detroit" to="/detroit">
          <div>
            detroit <img src={Dcity} alt="Detroit" width="200px" height={150} />
          </div>
        </Link>
        <Link className="austin" to="/austin">
          <div>
            austin
            <img src={Austcity} alt="Austin" width="210px" height={150} />
          </div>
        </Link>
        <Link className="raleigh" to="/raleigh">
          <div>
            raleigh
            <img src={Ralcity} alt="Raleigh" width="200px" height={150} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
