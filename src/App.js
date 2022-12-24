import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  API = "439f2438279f42a2b47bbbae2b53888e";
  pageSize = 9;
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            {/* we use key here because if we don't use it, than react will see that News is already opened and mounted, so it will not mount the different page again beause all values are same */}
            {/* so we use a key here for each news component to make them different and force mount*/}
            <Route exact path='/' element={
              <News key="general" pageSize={this.pageSize} country="in" category="general" apiKey={this.API} />
            } />
            <Route exact path='/business' element={
              <News key="business" pageSize={this.pageSize} country="in" category="business" apiKey={this.API} />
            } />
            <Route exact path='/entertainment' element={
              <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" apiKey={this.API} />
            } />
            <Route exact path='/general' element={
              <News key="general" pageSize={this.pageSize} country="in" category="general" apiKey={this.API} />
            } />
            <Route exact path='/health' element={
              <News key="health" pageSize={this.pageSize} country="in" category="health" apiKey={this.API} />
            } />
            <Route exact path='/science' element={
              <News key="science" pageSize={this.pageSize} country="in" category="science" apiKey={this.API} />
            } />
            <Route exact path='/sports' element={
              <News key="sports" pageSize={this.pageSize} country="in" category="sports" apiKey={this.API} />
            } />
            <Route exact path='/technology' element={
              <News key="technology" pageSize={this.pageSize} country="in" category="technology" apiKey={this.API} />
            } />
          </Routes>
        </div>
      </Router>
    )
  }
}
