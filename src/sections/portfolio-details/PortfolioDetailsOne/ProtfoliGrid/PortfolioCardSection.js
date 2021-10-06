import { Link } from '~components'
import React from 'react'
import portFolioImg1 from "../../../../../public/image/portfolio/portfolio-l6-img-1.png";
import portFolioImg2 from "../../../../../public/image/portfolio/portfolio-l6-img-2.png";
import portFolioImg3 from "../../../../../public/image/portfolio/portfolio-img-1.png";
import { Col, Container, Row } from 'react-bootstrap'
import PortfolioCard from './style'
import Card from './Components/Card'
export default function ProtfolioGridSection(){
return(
<PortfolioCard>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-7 col-lg-5 col-md-8 col-xs-9 text-center">
        {/* Section Title */}
        <PortfolioCard.Box mb="30px" mbLG="50px">
          <PortfolioCard.Subtitle fontColor="#fd346e" as="h6">Portfolio</PortfolioCard.Subtitle>
          <PortfolioCard.Title as="h2">Realted Works</PortfolioCard.Title>
        </PortfolioCard.Box>
        {/*/ .Section Title */}
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs="12" className="col-lg-4 col-md-6 col-xs-6">
      <Card image={portFolioImg1} title="Agency Brand guide" text="UX and UI, Design" />
      </Col>
      <Col xs="12" className="col-lg-4 col-md-6 col-xs-6">
      <Card image={portFolioImg2} title="Agency Brand guide" text="UX and UI, Design" />
      </Col>
      <Col xs="12" className="col-lg-4 col-md-6 col-xs-6">
      <Card image={portFolioImg3} title="Agency Brand guide" text="UX and UI, Design" />
      </Col>
    </Row>
    <PortfolioCard.ButtonGroup>
      <PortfolioCard.Button as={Link} className="btn btn-primary text-white" to="/">Load More</PortfolioCard.Button>
    </PortfolioCard.ButtonGroup>
  </Container>
</PortfolioCard>

)
}
