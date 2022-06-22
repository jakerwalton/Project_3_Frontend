import React from 'react'
import hard from '../assets/hard.png'
import Dcity from '../assets/Detroit.png'
import Htown from '../assets/Houstoncity.png'
import Ralcity from '../assets/Raleigh.png'
import Austcity from '../assets/austin.png'
function Home(props) {
  return (
    <div className="container">
      <div id="week"></div>
      <header>
        <img src={hard} />
      </header>
      <div className="houston">
        <img src={Htown} width="200px" height={150} center />
        houston
      </div>
      <div className="detroit">
        <img src={Dcity} width="200px" height={150} center />
        detroit
      </div>
      <div className="austin">
        <img src={Austcity} width="210px" height={150} center />
        austin
      </div>
      <div className="raleigh">
        <img src={Ralcity} width="200px" height={150} center />
        raleigh
      </div>
    </div>
  )
}

export default Home
