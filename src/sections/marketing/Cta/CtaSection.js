import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {Form} from '~components';
import Cta from './style';
const CtaSection = () => {
return(
<>
<Cta className="cta-section cta-section--l1 bg-purple-heart dark-mode-texts">
  <Cta.Shape className="footer__shape-1">
    <img src="/image/marketing/footer-shape.png"  alt="cta shape" className="w-100"/>
  </Cta.Shape>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-lg-7 col-md-8 text-center">
        <Cta.Box>
          <Cta.Title as="h2" fontColor="#fff">It’s easy to get <br className="d-none d-xs-block" /> started.
            Start now.</Cta.Title>
          {/* Newsletter */}
          <Cta.Newsletter>
            <Form>
              <Cta.NewsletterFromGroup mt="45px">
                <Form.Input className="form-control " type="email" placeholder="Enter your email" required />
                <Form.Button type="submit" value="Start For Free"/>
              </Cta.NewsletterFromGroup>
            </Form>
          </Cta.Newsletter>
          {/*/ .Newsletter */}
        </Cta.Box>
      </Col>
    </Row>
  </Container>
</Cta>

</>
)
}
 
export default CtaSection