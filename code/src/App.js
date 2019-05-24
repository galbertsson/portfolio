import React, { Component } from 'react';
import './css/App.css';

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
  }

  render() {
    return (
      <div className="App">
        <Home projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
