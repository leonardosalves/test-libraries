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
import AvaliacaoUI from './components/MUI/AvaliacaoUI';
import SelectUI from './components/MUI/SelectUI';
import SliderUI from './components/MUI/SliderUI';
import SliderCustonsPhone from './components/MUI/SliderCustons/SliderCustonsPhone';
import MusicPlayerSlider from './components/MUI/SliderCustons/SliderMusicPlayer';

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
              <Route path='/material-ui/rating' element={<AvaliacaoUI/>} />
              <Route path='/material-ui/select' element={<SelectUI/>} />
              <Route path='/material-ui/slider' element={<SliderUI/>} />
              <Route path='/material-ui/slider/custons-phone' element={<SliderCustonsPhone/>} />
              <Route path='/material-ui/slider/custons-music-player' element={<MusicPlayerSlider/>} />
          </Routes>
        </Router>
    </ContentDiv>
      
    
  )
}
export default App;
