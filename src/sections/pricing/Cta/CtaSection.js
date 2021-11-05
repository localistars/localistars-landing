import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {Form} from '~components';
import Cta from './style';
import { Link } from '~components';


const CtaSection = () => {
return(
<>
<Cta className="cta-section cta-section--l1">
  <Cta.Shape className="footer__shape-1">
    <img src="/image/marketing/footer-shape.png"  alt="cta shape" className="w-100"/>
  </Cta.Shape>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-lg-7 col-md-8 text-center">
        <Cta.Box>
          <Cta.Title as="h2" >No reason to postpone <br className="d-none d-xs-block" />
            a registration now</Cta.Title>
                    
               <Form.Button className="btn btn-primary" as={Link} target="_blank" href="https://www.localistars.app/login" value="Register For Free"/>
                        
        </Cta.Box>
      </Col>
    </Row>
  </Container>
</Cta>

</>
)
}
 
export default CtaSection