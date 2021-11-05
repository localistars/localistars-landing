import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceData from "~data/index/Service";
import ServiceWidget from "./Component/Widget";
import Service from "./style";

export default function ServiceSection() {
  return (
    <>
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <img
            src="/image/marketing/services-shape-l1.png"
            alt="shape dot"
          />
        </Service.Shape>
        <Container>
          {/* Section Title */}
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0">
                  Efficient translation
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                   services company & platform
                </Service.Title>
            </Col>
            <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
              <Service.Text>
                    Localistars is a user-friendly translation platform 
                    <br className="d-none d-xs-block" /> enables businesses of all sizes to order 
                    cost-effective translations from professional translators.                  
              </Service.Text>
            </Col>
          </Row>
            <Service.Box mtLG="100px" mtMD="40px">
              <Row className="justify-content-center justify-content-md-start">
                {serviceData.services.map(({ title, icon, iconColor, text,id }) => {
                  return(<Col className="col-lg-4 col-xs-6 col-10" key={id}>
                  <ServiceWidget icon={icon} title={title} text={text} iconColor={iconColor} id={id} mt="40px" /></Col>) 
                })}
              </Row>
            </Service.Box>
        </Container>
      </Service>
    </>
  )
}

