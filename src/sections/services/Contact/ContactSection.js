import React from "react"
import { Container, Row,Col } from "react-bootstrap"
import ContactForm from "./Components/ContactForm"
import ContactMap from "./Components/Map"
import Contact from "./style"

export default function ContactSction({...rest}) {
  return (
    <Contact {...rest}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs="12" className="col-xl-10">
          <Contact.Box mb="45" mbMD="3.135rem" mbLG="80px">
            <Contact.Subtitle as="h6" fontColor="#ff1e38">
              Contact With Us
            </Contact.Subtitle>
            <Contact.Title as="h2" pb="20px">
              Join Our Workplaces Around The World
            </Contact.Title>
          </Contact.Box>
          <ContactMap/>
          </Col>
          <Col xs="12" className="col-lg-10 mb-7 mb-lg-0">
            <ContactForm className="text-start" mt="50px"/>
          </Col>
        </Row>
      </Container>
    </Contact>
  )
}
