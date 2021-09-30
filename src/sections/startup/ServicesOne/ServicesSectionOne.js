import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceData  from "~data/startup/service"
import Service from './style'
import SectionTitle from './Components/SectionTitle'
import  ServicesCard from "./Components/Card"
export default function ServicesSectionOne(){
return(
<Service>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-8 text-center">
        <SectionTitle 
        subTitle="Our Services" 
        title="Provided Featrues"
        titleProps={{mb:"40px", mbLG:"75px"}}
        subTitleProps={{mb:"10px", className:"subline"}}
        />
      </Col>
    </Row>
    <Row className="justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true">
      {/* Single Services */}
      {ServiceData.map(({ title, icon, text, id, iconBackground }) => {
              return (
              <Col xs="h2" className="col-xl-3 col-lg-4 col-sm-6 col-xs-8" key={id}>
                <ServicesCard
                  title={title}
                  text={text}
                  icon={icon}
                  iconBackground={iconBackground}
                />
              </Col>
              )
            })}
      {/*/ .Single Services */}
    </Row>
  </Container>
</Service>

)
}