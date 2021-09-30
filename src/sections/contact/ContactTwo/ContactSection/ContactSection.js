import React from "react"
import { Container, Row,Col } from "react-bootstrap"
import ContactForm from "./Components/ContactForm"
import ContactMap from "./Components/Map"
import Contact from "./style"

export default function ContactTwo({...rest}) {
  return (
    <Contact backgroundColor="#f3f4f6" {...rest}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs="12" className="col-xxl-7 col-xl-8 px-sm-7 col-lg-9 col-md-10 col-sm-10">          
          <Contact.Box mb="45" mbMD="3.135rem" mbLG="80px">
            <Contact.Subtitle as="h6" fontColor="#ff1e38">
              Contact With Us
            </Contact.Subtitle>
            <Contact.Title as="h2" pb="20px">
              Join Our Workplaces Around The World
            </Contact.Title>
          </Contact.Box >
          </Col>
          <Col xs="12" className="col-lg-10 mb-7 mb-lg-0">
            <ContactMap/>
            <ContactForm className="text-start" mt="50px"/>
          </Col>
        </Row>
      </Container>
    </Contact>
  )
}
