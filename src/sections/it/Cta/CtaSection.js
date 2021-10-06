import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { Link } from '~components'
import Cta from './style'
 
export default function CtaSection(){
return(
<Cta backgroundImage="image/it-services/promo-bg.png">
    <Container>
        <Row className="justify-content-center">
            <Col xs="12" className="col-xl-7 text-center">
                <Cta.Title as="h2" fontColor="#fff" mb="10px">Let’s talk about work</Cta.Title>
                <Cta.Text fontColor="#fff">Part of what Adobe does is advise our<br className="d-none d-xs-block" /> customers about  transform, </Cta.Text>
                <Cta.Button  mt="20px" as={Link} to="/">Get Started</Cta.Button>
            </Col>
        </Row>
    </Container>
</Cta>
)
}

// style={{backgroundImage: `url(${})`}}