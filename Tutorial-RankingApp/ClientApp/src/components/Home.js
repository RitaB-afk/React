import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>This app is something I made while following a tutorial on youtube:</p>
        <ul>
                <li><a href='https://youtu.be/4RKuyp_bOhY'>React with .NET Web API  Basic App Tutorial</a></li>
          
        </ul>
        <p>You can click Rank Movies and try it out.</p>
      </div>
    );
  }
}
