import React, { Component } from 'react';
import './css/App.css';
import './css/Projects.css';

import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';

class Projects extends Component{

  constructor(props){
    super(props);
    this.node = React.createRef();
  }

  renderProject(project){
    return (<Grid item xs={12} md={4}><ProjectCard project={project} /></Grid>);
  }

  render() {
    return (
      <section ref={this.node} id="projects" style={{padding: 12}}>
        <h1 id="projectTitle">
          {this.props.header}
        </h1>
        <Grid container spacing={24}>
            {this.props.projects.map(project => this.renderProject(project))}
        </Grid>
      </section>
    );

  }
}

export default Projects;