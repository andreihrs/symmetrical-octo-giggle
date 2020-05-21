import React from 'react'
import '../styles/orgchart.css'
import '../styles/main.css'
import SeeMoreButton from '../utils/SeeMoreButton.js'

const OrgChart = () => {
  const [display, setDisplay] = React.useState(true);
  const [display2, setDisplay2] = React.useState(true);

  const handleSeeMore1 = (e) => {
    e.preventDefault()
    setDisplay(!display)    
  }

  const handleSeeMore2 = (e) => {
    e.preventDefault()
    setDisplay2(!display2)    
  }
  // TO-DO: MAKE IT RESPONSIVE
  // TO-DO: ADD BUTTON TO HIDE EMPLOYEES UNDER MGMT
  // TO-DO: MAKE THE 3RD GRADE EMPLOYEES LOOK ALL SIMILAR
  return (
    <div className="py-10">
      <div className="tree">
        <ul className="flex justify-center">
          <li className="prev-bosses prev-selected">
            <div className={`${display ? "" : "flex flex-col justify-between items-center"}`}>
              <a href="#" onClick={handleSeeMore1} >
                <img src="http://placehold.it/110x110" alt="CEO" />
                <h4>Leonardo DiCaprio</h4>
                <p>CEO</p>
              </a> 
              {!display ? <SeeMoreButton onClick={handleSeeMore1}/> : (
                <ul className="selected">
                  <li>
                    <a href="#">
                      <img src="http://placehold.it/110x110" alt="CFO" />
                      <h4>Mary Johnson</h4>
                      <p>CFO</p>
                    </a>
                    <ul>
                      {/* <li className="flex">
                        <a href="#" >
                          <img src="http://placehold.it/25x25" alt="" />
                          <h4>Dan Roberts</h4>
                          <p>Employee</p>
                        </a>
                      </li> */}
                      {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li> */}
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://placehold.it/110x110" alt="" />
                      <h4>Aaaron Bennett</h4>
                      <p>VP Bus Dev</p>
                    </a>
                    <ul>
                      {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li> */}
                    </ul>
                  </li>
                  <li className="border">
                    <div className={`${display2 ? "" : "flex flex-col justify-around items-center"}`}>
                      <a href="#" onClick={handleSeeMore2}>
                        <img src="http://placehold.it/110x110" alt="" />
                        <h4>Peter Carlson</h4>
                        <p>Sr. Software Developer</p>
                      </a>
                      {!display2 ? <SeeMoreButton onClick={(event) => handleSeeMore2(event)}/> : (
                        <ul className={`${display2 ? "selected" : "hidden"}`}>
                          <li>
                            <a href="#">
                              <img src="http://placehold.it/25x25" alt="" />
                              <h4>Abbey Christensen</h4>
                              <p>Intern</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="http://placehold.it/25x25" alt="" />
                              <h4>Justin Rhyss</h4>
                              <p>Intern</p>
                            </a>
                          </li>
                        </ul> )}
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://placehold.it/110x110" alt="" />
                      <h4>Janet Perkins</h4>
                      <p>VP Div B</p>
                    </a>
                    <ul>
                      {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>    */}
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://placehold.it/110x110" alt="" />
                      <h4>Mary Johnson</h4>
                      <p>Engineering Software Team Lead</p>
                    </a>
                    <ul>
                    {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                      <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>  */}
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OrgChart
