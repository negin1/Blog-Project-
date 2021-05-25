import React from 'react'


import BlogPost from './BlogPost'
import Sidebar from './Sidebar'

import styled from 'styled-components'
const StyledDiv = styled.div`

 display: flex;
 justify-content: space-between;
 margin: 20px 0;

 `



const Post = (props) => {
  return (
    <StyledDiv>
      <BlogPost />
      <Sidebar />
    </StyledDiv>
  ) 
}

export default Post
