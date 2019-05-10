import React, { Component } from 'react';
import './css/App.css';

class ProjectPage extends Component {
  
  render() {
    return (
      <div className="App">
        {this.props.name}
      </div>
    );
  }
}

export default ProjectPage;
