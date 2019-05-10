import React, { Component } from 'react';
import './css/App.css';
import './css/Navigation.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navigation extends Component {

  constructor(){
    super();
    this.navBar = React.createRef();
    this.state = {navHeight : 0}
  }

  

  componentDidMount(){
    this.setState({navBar : this.navBar});
  }

  linkPressed(id) {
    window.scrollTo({
      top: this.props.references[id].current.node.current.offsetTop-64, 
      behavior: 'smooth'
    })

    
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div ref={this.navBar}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Portfolio
            </Typography>
            <Button color="inherit" onClick={() => this.linkPressed("home")}>Home</Button>
            <Button color="inherit" onClick={() => this.linkPressed("projects")}>Projects</Button>
            <Button color="inherit" onClick={() => this.linkPressed("education")}>Education</Button>
          </Toolbar>
        </AppBar>
        
    </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);