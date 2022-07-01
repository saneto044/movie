import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './App.scss'
//COmponents
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/movie/:imdbID' element={<MovieDetails/>} />
              <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </div>
  ); 
}

export default App;
