import React from 'react'

  import styled from 'styled-components'

const StyledDiv = styled.div`
background-color: #ffff;
padding: 50px 0;
text-align:center;

a{
 font-family: 'Dancing Script', cursive;
 font-size: 50px;
 text-decoration: none;
 color: #333;
}



`

function Logo() {
  return (
    <StyledDiv>
    <a href="#">Negin J</a>

    
    </StyledDiv>
  )
}

export default Logo
