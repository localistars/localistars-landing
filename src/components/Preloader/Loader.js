import React from 'react'
import styled from 'styled-components'
import loaderImage from "~image/preloader.gif"
const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999999;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  display: ${props => props.display};
    img {
      z-index: 9999;
      max-width: 150px;
    }
`
const Loader = ({show}) => {
return(
<LoaderWrapper display={show ? "flex" : "none"}>
    <img src={loaderImage.src} alt="img"/>
</LoaderWrapper>
)
}
 
export default Loader