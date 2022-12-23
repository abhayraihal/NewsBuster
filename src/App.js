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
  render() {
    let API = "439f2438279f42a2b47bbbae2b53888e";
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            {/* we use key here because if we don't use it, than react will see that News is already opened and mounted, so it will not mount the different page again beause all values are same */}
            {/* so we use a key here for each news component to make them different and force mount*/}
            <Route exact path='/' element={
              <News key="general" pageSize={9} country="in" category="general" apiKey={API} />
            } />
            <Route exact path='/business' element={
              <News key="business" pageSize={9} country="in" category="business" apiKey={API} />
            } />
            <Route exact path='/entertainment' element={
              <News key="entertainment" pageSize={9} country="in" category="entertainment" apiKey={API} />
            } />
            <Route exact path='/general' element={
              <News key="general" pageSize={9} country="in" category="general" apiKey={API} />
            } />
            <Route exact path='/health' element={
              <News key="health" pageSize={9} country="in" category="health" apiKey={API} />
            } />
            <Route exact path='/science' element={
              <News key="science" pageSize={9} country="in" category="science" apiKey={API} />
            } />
            <Route exact path='/sports' element={
              <News key="sports" pageSize={9} country="in" category="sports" apiKey={API} />
            } />
            <Route exact path='/technology' element={
              <News key="technology" pageSize={9} country="in" category="technology" apiKey={API} />
            } />
          </Routes>
        </div>
      </Router>
    )
  }
}
