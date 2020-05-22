import React from 'react'
import '../styles/orgchart.css'
import '../styles/main.css'
import SeeMoreButton from '../utils/SeeMoreButton.js'
import OrgChartProfile from './OrgChartProfile.js'

const OrgChart = () => {
  const [display, setDisplay] = React.useState(true);
  const [display2, setDisplay2] = React.useState(true);

  const handleSeeMore1 = (e) => {
    e.preventDefault()
    setDisplay(!display)    
  }

  const handleSeeMore2 = (e) => {
    e.preventDefault();
    setDisplay2(!display2);
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
                    <OrgChartProfile 
                      name={"Mary Johnson"}
                      title={"CFO"} 
                    />
                    <ul>

                    </ul>
                  </li>
                  <li>
                    <OrgChartProfile 
                      name={"Aaronn Bennett"}
                      title={"VP Business Development"} 
                    />
                    <ul>

                    </ul>
                  </li>
                  <li>
                    <div className={`${display2 ? "" : "flex flex-col justify-around items-center"}`}>
                      <a href="#" onClick={handleSeeMore2}>
                        <img src="http://placehold.it/110x110" alt="" />
                        <h4>Peter Carlson</h4>
                        <p>Sr. Software Developer</p>
                      </a>
                      {!display2 ? 
                        <ul className="selected">
                          <div class="w-full">
                          <SeeMoreButton onClick={(event) => handleSeeMore2(event)}/>
                          </div>
                        </ul> : (
                        <ul className={`${display2 ? "selected justify-center" : "hidden"}`}>
                          <li>
                            <OrgChartProfile 
                              name={"Abbey Christensen"}
                              title={"Intern"} 
                            />
                          </li>
                          <li>
                            <OrgChartProfile 
                              name={"Justin Rhyss"}
                              title={"Intern"} 
                            />
                          </li>
                          <li>
                            <OrgChartProfile 
                              name={"Abbey Christensen"}
                              title={"Senior Software Developer"} 
                            />
                          </li>
                          <li>
                            <OrgChartProfile 
                              name={"Justin Rhyss"}
                              title={"Intern"} 
                            />
                          </li>
                          <li>
                            <OrgChartProfile 
                              name={"Abbey Christensen"}
                              title={"Intern"} 
                             />
                          </li>
                        </ul> )}
                    </div>
                  </li>
                  <li>
                    <OrgChartProfile 
                        name={"Janet Perkins"}
                        title={"VP of Marketing"} 
                    />
                    <ul> {/* Employees here*/}
                    </ul>
                  </li>
                  <li>
                    <OrgChartProfile 
                      name={"Mary Johnson"}
                      title={"Engineering Software Team Lead"} 
                    />
                    {display2 ? (
                      <ul className="selected">
                        <div class="w-full">
                          <SeeMoreButton onClick={(event) => handleSeeMore2(event)}/>
                        </div>
                      </ul> ) : (
                    <ul className={`${display2 ? "border selected justify-center" : "hidden"}`}>
                      <li>
                        <OrgChartProfile 
                          name={"Abbey Christensen"}
                          title={"Senior Software Developer"} 
                        />  
                      </li>
                        <li>
                          <OrgChartProfile 
                            name={"Justin Rhyss"}
                            title={"Intern"} 
                          />  
                        </li>
                        <li>
                          <OrgChartProfile 
                            name={"Abbey Christensen"}
                            title={"Intern"} 
                          />  
                        </li>
                        <li>
                          <OrgChartProfile 
                            name={"Abbey Christensen"}
                            title={"Intern"} 
                          />  
                        </li>
                    </ul>)}
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
