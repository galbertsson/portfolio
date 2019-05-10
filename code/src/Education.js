import React, { Component } from 'react';
import './css/App.css';
import './css/Education.css';

import { Paper } from '@material-ui/core';

class Education extends Component {
  constructor(){
    super();
    this.node = React.createRef();
  }
  
  render() {
    let courses = ["DIT980 Discrete Mathematics for Computer Scientists", 
              "DIT440 Introduction to functional programming",
              "DIT012 Imperative programming with basic object orientation",
              "MMGD20 Linear algebra",
              "DIT952 Object oriented programming and design",
              "MMGD30 Mathematical analysis",
              "DIT321 Finite Automata Theory and Formal Languages",
              "DIT960 Data structures",
              "DIT791 Basic Computer Engineering",
              "DIT391 Principles of Concurrent Programming",
              "DIT082 Testing, Debugging and Verification",
              "DIT620 Databases",
              "TIG095 Human computer interaction",
              "DIT423 Computer communication",
              "DIT543 Software Engineering Project",
              "DIT991 Mathematical modelling and problem solving",
              "DIT602 Algorithms",
              "DIT212 Object Oriented programming project",
              "DIT945 Model-Driven Software Development",
              "DIT240 Distributed Systems",
              "DIT126 Web applications"];

    return (
      <Paper id="education">
        <div ref={this.node}>
          <h1>
            {this.props.header}
          </h1>
          <div>
            <p className="text">My education consists of a Computer science degree from University of Gothenburg, but also a general interest in computers and programming.</p>
            <p className="text">The courses I have taken at Gothenburg university is the following:</p>
            <ul className="courses">
              {courses.map(elem => <li className="course" key={elem}>{elem}</li>)}
            </ul>
          </div>
        </div>
      </Paper>
    );

  }
}

export default Education;