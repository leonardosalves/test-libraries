import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RiChart from './components/ReChart';
import Home from './components/Home';
import { styled } from '@stitches/react';
import MaterialUI from './components/MaterialUI';

const App = () =>{

  const ContentDiv = styled('div',{
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    height: '100vh'
  })

  return(
    <ContentDiv>
        <Router>
          <Sidebar />
          <Routes> 
              <Route path='/' element={<Home/>}></Route>
              <Route path='/ri-chart' element={<RiChart/>} />
              <Route path='/material-ui' element={<MaterialUI/>} />
          </Routes>
        </Router>
    </ContentDiv>
      
    
  )
}
export default App;
