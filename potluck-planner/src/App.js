import './App.css';
import styled from 'styled-components';
import { AccountBox } from './Components/accountBox';
import Login from './Components/LogIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return (
     /*This is the new syntax for routing
      Sorry I had to move your styling here to your index.js because I didn't know how to fit it in the element tag below */ 
     <Router>
        <Routes>
          <Route path='/' element={<AccountBox />} />
          <Route path='/login' element={<Login />} />      
        </Routes>
      </Router>
  );
}

export default App;
