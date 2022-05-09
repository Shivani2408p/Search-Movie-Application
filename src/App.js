import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MoreDetails from './Components/MoreDetails/MoreDetails';
import MovieCard from './Components/MovieCard/MovieCard';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieCard/>} />
        <Route path='/moredetails/:id' element={<MoreDetails/>} />
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
