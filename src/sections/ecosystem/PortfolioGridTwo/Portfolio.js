import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PortfolioCard from './Components/Card'
import Portfolio from "./style"
import portfolioData from "~data/ecosystem/data"

  export default function PortfolioSection({gutters,containerFluid,...rest}){
      
  return(
  <Portfolio {...rest}>
    <Container fluid={containerFluid}>
      <Row className={`justify-content-center ${!gutters ?"gx-0":null}`}>
            {portfolioData.map(
              ({ image, titleSmall, title }, index) => {
                return (
                    <Portfolio.Box mb={gutters ?"25px":null} className="col-xl-6 col-lg-4 col-xs-10" key={index + "pp"}>
                      <PortfolioCard image={image} title={titleSmall} text={title}/>
                    </Portfolio.Box>
                  )
                }
            )}
      </Row>
      <Portfolio.Box className="text-center" mt="30px">
        <Portfolio.Button className="btn-primary">
          Load More
        </Portfolio.Button>
      </Portfolio.Box>
    </Container>
  </Portfolio>
  
  )
  }
  