import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
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
    ]})
  }

  handleAddProject(project){
    console.log(project);
    let projects = this.state.projects;
    projects.push(project)
    this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this)} />
        <br/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
