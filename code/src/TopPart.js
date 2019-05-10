import React, { Component } from 'react';

import './css/TopPart.css';

class TopPart extends Component {

  constructor(){
    super();
    this.node = React.createRef();

  }

  render() {
    return (
      <header ref={this.node} style={{paddingTop : "64px"}} className="App-header">
        <div>
          <div id="text-container">
              <h1 id="topText">
                Hello, 
                <br/>
                I do web stuff!
              </h1>
          </div>

          <div className="icons">
            <a className="icon" target="_blank" href="https://github.com/galbertsson"><img src={require("./images/github.png")} alt="Github icon"/></a>
            <a className="icon" target="_blank" href="https://bitbucket.org"><img src={require("./images/bitbucket.png")} alt="Bitbucket icon"/></a>
            <a className="icon" target="_blank" href="https://www.linkedin.com/in/gustav-albertsson-942a00179/"><img src={require("./images/linkedin.png")} alt="LinkedIn icon"/></a>
        </div>
        </div>


      </header>
    );
  }
}

export default TopPart;