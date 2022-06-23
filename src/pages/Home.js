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
          <img src={hard} width="600px" />
        </header>
        <div className="houston">
          houston <img src={Htown} width="200px" height={150} center />
        </div>
        <div id="new">
          <Link to="/new">
            <button className="new">Add New Restraunt</button>
          </Link>
        </div>
        <div className="detroit">
          detroit <img src={Dcity} width="200px" height={150} center />
        </div>
        <div className="austin">
          austin
          <img src={Austcity} width="210px" height={150} center />
        </div>
        <div className="raleigh">
          raleigh
          <img src={Ralcity} width="200px" height={150} center />
        </div>
      </div>
    </div>
  )
}

export default Home
