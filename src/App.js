import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects: [
        {
          title: 'Business Website',
          category: 'web design'
        },
        {
          title: 'Social App',
          category: 'Mobile developement'
        },
        {
          title: 'Ecomerce Application',
          category: 'web developement'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
