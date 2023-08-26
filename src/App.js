import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const API = '439f2438279f42a2b47bbbae2b53888e';
  
  const pageSize = 9;
  const [progress, setProgress] = React.useState(0);

  return (
    <Router>
      <div>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <NavBar />
        <Routes>
          {/* we use key here because if we don't use it, than react will see that News is already opened and mounted, so it will not mount the different page again beause all values are same */}
          {/* so we use a key here for each news component to make them different and force mount*/}
          <Route exact path='/' element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" apiKey={API} />
          } />
          <Route exact path='/business' element={
            <News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" apiKey={API} />
          } />
          <Route exact path='/entertainment' element={
            <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={API} />
          } />
          {/* <Route exact path='/general' element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" apiKey={API} />
          } /> */}
          <Route exact path='/health' element={
            <News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" apiKey={API} />
          } />
          <Route exact path='/science' element={
            <News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" apiKey={API} />
          } />
          <Route exact path='/sports' element={
            <News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" apiKey={API} />
          } />
          <Route exact path='/technology' element={
            <News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" apiKey={API} />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
