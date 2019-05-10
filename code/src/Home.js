import React, { Component } from 'react';
import './css/App.css';
import Education from './Education';
import Projects from './Projects';
import Navigation from './Navigation';
import TopPart from './TopPart';

class Home extends Component {
  constructor(props){
    super(props);
    this.projects = React.createRef();
    this.education = React.createRef();
    this.home = React.createRef();
  }

  render() {
    return (
        <div>
            <Navigation references={{projects : this.projects, education: this.education, home: this.home}}/>
            <TopPart ref={this.home}/>
            <Projects ref={this.projects} projects={this.props.projects} header="My projects"/>
            <Education ref={this.education} header="Education"/>
        </div>
    );
  }
}

export default Home;
