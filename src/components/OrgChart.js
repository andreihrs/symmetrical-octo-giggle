import React from 'react'
import '../styles/orgchart.css'
import '../styles/main.css'
import SeeMoreButton from '../utils/SeeMoreButton.js'

const OrgChart = () => {
  const [display, setDisplay] = React.useState(true);

  const handleSeeMore = () => {
    setDisplay(!display)    
  }
  // TO-DO: MAKE IT RESPONSIVE
  // TO-DO: ADD BUTTON TO HIDE EMPLOYEES UNDER MGMT
  // TO-DO: MAKE THE 3RD GRADE EMPLOYEES LOOK ALL SIMILAR
  return (
    <div className="py-10">
      <div className="tree">
        <ul>
          <li onClick={handleSeeMore}>
          <a href="#"><img src="http://placehold.it/110x110" alt="CEO" />CEO</a> 
          {!display ? <SeeMoreButton /> : (
            <ul>
              <li>
                <a href="#"><img src="http://placehold.it/110x110" alt="CFO" />CFO</a>
                <ul>
                  <li className="flex">
                    <a href="#" >
                      <img src="http://placehold.it/25x25" alt="" />
                      Dan Roberts
                      Employee
                    </a>
                  </li>
                  {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li> */}
                </ul>
              </li>
              <li>
                <a href="#"><img src="http://placehold.it/110x110" alt="" />VP Bus Dev</a>
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
              <li>
                <a href="#"><img src="http://placehold.it/110x110" alt="" />VP Div A</a>
                <ul>
                  {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>*/}
                </ul> 
              </li>
              <li><a href="#"><img src="http://placehold.it/110x110" alt="" />VP Div B</a>
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
              <li><a href="#"><img src="http://placehold.it/110x110" alt="" />VP Div C</a>
                <ul>
                {/* <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>  */}
                </ul>
              </li>
              <li><a href="#"><img src="http://placehold.it/110x110" alt="VP HR" />VP HR</a>
                {/* <ul>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                  <li><a href="#"><img src="http://placehold.it/25x25" alt="" />Employee</a></li>
                </ul> */}
              </li>
            </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OrgChart
