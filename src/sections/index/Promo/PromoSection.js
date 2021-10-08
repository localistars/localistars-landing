import React from "react";
import { Col, Container, Form, FormCheck, Row } from "react-bootstrap";
import Promo from "./style";
import Cta from '../Cta/style'
import { Link } from '~components'
import SectionTitle from "./Components/SectionTitle";
import { Button } from "~styled";
export default function CtaSection() {
  return (
   <Promo>
      <Container>
        <Row className="justify-content-center justify-content-xl-end">
          <Col
            xs="12"
            className="col-xxl-6 col-xl-5 col-lg-5 col-md-7 col-xs-9"
          >
            <Promo.Image>
              <img src="/image/home-app/promo-l8-img.png" alt="content" placeholder="blur" />
            </Promo.Image>
          </Col>
          <Col className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
            <Promo.Content>
              <Promo.Box>
                <SectionTitle
                  subTitle="Get started now"
                  title="Find the best translator that suits your need<br className='d-none d-lg-block'/>
"
                  subTitleProps={{ mb: "30px", className: "black" }}
                  titleProps={{ mb: "30px" }}
                />

                 <Cta.Button as={Link} to="/translator" alt="" className="btn btn-bittersweet text-white box-shadow-1">Find a translator</Cta.Button>
              </Promo.Box>

            </Promo.Content>
          </Col>
        </Row>
      </Container>
    </Promo>
  );
}

