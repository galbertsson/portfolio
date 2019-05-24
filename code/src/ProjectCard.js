import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';

import Grid from '@material-ui/core/Grid';

const styles = {
  media:{
    height: 300,
  },
}

class MediaCard extends Component {

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
      state.widths[img.id] = 6
    }else{ //If Landscape image
      state.widths[img.id] = 12
    }
    this.setState(state)
  }

  render() {
    
    const classes = this.props.classes;

    return (
    <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              {this.props.project.codeUrl ?
              <a href={this.props.project.codeUrl} target="_blank">
                <img src={require("./images/code.svg")}/>
              </a>
              :
              <img src={require("./images/no-code.svg")}/>
              }
              
            </IconButton>
          }
          title={this.props.project.title}
        />
        <CardMedia
          className={classes.media}
          image={this.props.project.pictures[0]}
        />
        <CardContent>
          <ExpansionPanel style={{boxShadow: "none", padding : 0}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{padding : 0}}>
              <Grid spacing={12} style={{padding: 24}} container>
                  <Grid item>
                    <Typography>
                      {this.props.project.text}
                    </Typography>
                  </Grid>
                  {this.props.project.pictures.map(picURL => 
                    <Grid key={picURL} item xs={12} md={this.state.widths[picURL]}>
                      <img id={picURL} style={{maxWidth:'100%', maxHeight:'100%', width: 'auto', height: 'auto'}} onLoad={this.onImageLoad} src={picURL} alt=""/>
                    </Grid>
                  )}
              </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </CardContent>
      <CardActions>
        <IconButton aria-label="Add to favorites">
          
        </IconButton>
      </CardActions>
    </Card>
    )
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

