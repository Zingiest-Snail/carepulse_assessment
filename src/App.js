import React, {Component} from 'react';
import {patchData} from './functions/Patch.js';

import VacantBeds from './components/VacantBeds';

import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import axios from 'axios';
import './App.css';

//App Class
class App extends Component {
  state = {
      data: {
          results:[
              {
              id:0,
              beds:{
                  Residential:0,
                  Nursing:0
              }
          }
          ]
      }
  }

  //Inserts base server data
  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://skills-assessment.herokuapp.com/api/skills_assessment/?limit=10').then(res => this.setState({data: res.data}))
  };
  //Changes page
  changeFunction = (url) =>{
      console.log(url)
      axios.get('http://cors-anywhere.herokuapp.com/'+url).then(res => this.setState({data: res.data}))
  }

//Submit Changes to Bed Vacancies
  submitFunction = (id, newR, newN) => {
      this.setState({results: this.state.data.results.map(result => {
          if(result.id === id){
              result.beds.Residential = newR
              result.beds.Nursing = newN
          }
          patchData(id,newR,newN)
          return result;
      }) });
  }
  
  
  render() {
      const{ results }=this.state.data;
    return (
      <div className="App" style={appStyle}>
        <Header />
        <Nav urlData={this.state.data} changeFunction={this.changeFunction} />
        <VacantBeds resultsData={results} submitFunction={this.submitFunction}/>
        <Footer />
      </div>
    );
  }
}
//Style for app
const appStyle = {
    background:'#F0F4F5'
}


export default App;