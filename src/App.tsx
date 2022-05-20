import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RiChart from './components/ReChart';
import Home from './components/Home';
import { styled } from '@stitches/react';
import MaterialUI from './components/MaterialUI';
import AutocompleteUI from './components/MUI/AutocompleteUI';
import ButtonUI from './components/MUI/ButtonUI';
import CheckBoxUI from './components/MUI/CheckBoxUI';
import BotaoFlutuanteUI from './components/MUI/BotaoFlutuanteUI';
import RadioUI from './components/MUI/RadioUI';

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
              <Route path='/material-ui/autocomplete' element={<AutocompleteUI/>} />
              <Route path='/material-ui/button' element={<ButtonUI/>} />
              <Route path='/material-ui/checkbox' element={<CheckBoxUI/>} />
              <Route path='/material-ui/botao-flutuante' element={<BotaoFlutuanteUI/>} />
              <Route path='/material-ui/radio' element={<RadioUI/>} />
          </Routes>
        </Router>
    </ContentDiv>
      
    
  )
}
export default App;
