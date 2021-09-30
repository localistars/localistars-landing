import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ServicesCard from "./Components/Card"
import Service from "./style"
import ServiceData  from "~data/Career/services"
import SectionTitle from './Components/SectionTitle'
export default function ServicesSection({ ...rest }) {
  return (
    <Service backgroundColor="rgba(169, 210, 255, 0.1)" {...rest}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12 text-center">
          <SectionTitle 
                title="Join a Workplace That Gives You More"
                text="Learning opportunities, networking budgets, flexible hours, top <br class='d-none d-lg-block'/>
                benefits to keep employees healthy and happy."
                titleProps={{mb:"10px"}}
                textProps={{mb:"63px"}}
                />
          </Col>
        </Row>
        <Row className="justify-content-center">
            {ServiceData.map(({ title, icon, text, id, iconBackground }) => {
              return (
                <Col
                  xs="12"
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-9 col-xs-10 "
                  key={id}
                >
                <ServicesCard
                  title={title}
                  text={text}
                  icon={icon}
                  to="/marketing"
                  iconBackground={iconBackground}
                />
              </Col>
              )
            })}
        </Row>
      </Container>
    </Service>
  )
}



