
import './App.css';
import ContactUs from './components/ContactUs'; 
import Hero from './components/Hero';
 import Home from './components/Home'; 
import {BrowserRouter as Router, Switch, Route,  Link} from "react-router-dom";


import styled from 'styled-components'
import Header from './components/Header';
import Post from './components/Post';

const StyledDiv = styled.div`
 width:90%;
 border: 1px solid black;
 margin: 0 auto;
`

function App() {
  return (
    <Router>
      <StyledDiv>
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/constct-us" component={ContactUs} />
        <Route path="/post" component={Post} />
     
      </StyledDiv>
    </Router>
  
  );
}

export default App;
