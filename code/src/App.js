import React, { Component } from 'react';
import './css/App.css';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './Home';
import * as firebase from 'firebase';

let app = firebase.initializeApp({
  apiKey:  "AIzaSyD1YWJxtsrkQwu5RbvA5StApzM6kKTzfLw",
  databaseURL: "https://galbertsson-9dde1.firebaseio.com/"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects : []
    }
  }

  componentDidMount(){
    app.database().ref("/projects").once("value").then((data) => {
      this.setState({projects: data.val()});
    })

    /*fetch('/api/projects')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({projects: responseJson.projects});
    })
    .catch((error) => {
      console.error(error);
    });*/
  }

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={() => <Home projects={this.state.projects} />} />
            <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
