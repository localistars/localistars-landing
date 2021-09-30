import React from 'react'
import Services from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from "react-bootstrap"
import ServicesCard from "./Components/Card"
import ServicesCardTwo from "./Components/CardTwo"
import { ServiceDataIt } from "~data"
import { Link } from '~components'
export default function ServicesSection(){
return(
<Services backgroundColor="#f3f4f6">
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xxl-6 col-xl-7 col-md-9 col-sm-10 text-center">
      <SectionTitle
        subTitle="Our Services" 
        title="We run all kinds of services in form of Technologies"
        subTitleProps={{mb:"27px"}}
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
      </Col>
    </Row>
    <Row className="justify-content-center">

    {ServiceDataIt.map(({ title, icon, text, id, iconBackground }) => {
          return (
            <Services.Box mb="25px"
              xs="12"
              className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-xs-10"
              key={id}
            >
            <ServicesCard
              title={title}
              text={text}
              icon={icon}
              to="/"
              iconBackground={iconBackground}
            />
          </Services.Box>
          )
        })}
      <Services.Box mb="25px" xs="12" className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-xs-10">
        <ServicesCardTwo/>
      </Services.Box>
    </Row>
  </Container>
</Services>

)
}