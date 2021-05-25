import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";

import '../App.css'

import styled from 'styled-components'

const StyledDiv = styled.div`
  padding:10px 0;
  display: flex;
  justify-content: space-between;

 ul {
  margin:0;
  padding:10px 0;

  } 
  
  li{
    list-style: none;
    display: inline-block;
  }

  a{
    text-decoration: none;
    display: block;
    font-size: 20px;
   text-transform: capitalize;
    font-weight: 400;
    color: #565673; 
    padding: 0 10px; 
  }

`

const Search = styled.div`
display: flex;
align-items: center;

  



`;



const Navbar = (props) => {
  const [serarch, setSearch] =useState(false);

const submitSearch=(e)=>{
  e.preventDefault();
  }
 
  const openSearch=(e)=>{
    setSearch(true)
 
    
  }



  return (
  <StyledDiv>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink> </li>
          <li><NavLink to="/about-us">About us</NavLink> </li>
          <li><NavLink to="/post">Posts</NavLink> </li>
          <li><NavLink to="/contact-us">Contact Us </NavLink> </li>
       </ul>
      </nav>

      <Search>
        <form onSubmit={submitSearch}>
         <input className="serachInput" type="text" placeholder="search" />
          <SearchIcon className="searchIcon" onClick={openSearch}/> 

        </form>
     
      </Search>
      
    </StyledDiv>
  )
}

export default Navbar
