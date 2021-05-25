import React from 'react'

import styled from 'styled-components'

const StyledDiv = styled.div`
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;


 nav {
  margin: 10px 0;
  } 

  nav a{
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    color: #565673;
    font-size: 13px;
    }

  nav a:hover{
    color:#5f9ae0;
  }


`





const Header = () => {
  return (
   <StyledDiv>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact US</a>
      </nav>

      <div>p</div>

    
      
    </StyledDiv>
  )
}

export default Header;
