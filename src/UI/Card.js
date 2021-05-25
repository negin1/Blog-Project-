import React from 'react'


import styled from 'styled-components'

const StyledDiv = styled.div`
background-color: #ffff;
width: 100%;


`
const Card = (props) => {
  return (
  <StyledDiv style={{width: props.width?props.width:'100%'}}>
      {props.children}
  </StyledDiv>
  )
}

export default Card
