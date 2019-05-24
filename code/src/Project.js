import React, { Component } from 'react';
import './css/App.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Project extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.state.pictures = []
    this.state.widths = {}
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  //Setting up the size of the image
  onImageLoad({target:img}){
    //If Portrait image
    let state = this.state
    if(img.naturalWidth < img.naturalHeight){
      state.widths[img.id] = 2
    }else{ //If Landscape image
      state.widths[img.id] = 6
    }
    this.setState(state)
  }

  render() {
    if(this.props.project){
      return (
          <Paper style={{textAlign: "center"}}>
          <h1>{this.props.project && this.props.project.title}</h1>
          <p>{this.props.project && this.props.project.text}</p>

          <Grid spacing={24} style={{padding: 24}} container>
            {this.props.project && this.props.project.pictures.map(picURL => 
              <Grid key={picURL} item xs={12} md={this.state.widths[picURL]}>
                <img id={picURL} style={{maxWidth:'100%', maxHeight:'100%', width: 'auto', height: 'auto'}} onLoad={this.onImageLoad} src={picURL} alt=""/>
              </Grid>)}
          </Grid>

        </Paper>
      )
    }else{
      return null;
    }
  }
}

export default Project;