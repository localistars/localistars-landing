import React from 'react'
import { Col, Row , Container } from 'react-bootstrap'
import Pricing from './style'
import PricingCard from "./Components/Card" 
import InnerShape from './Components/InnerPageShapeOne'


const pricingValues ={
  cardOne : {
    monthly:{
      price: 30,
    },
    yearly:{
      price:25,
    }
  },
  cardTwo : {
    monthly:{
      price: 60,
    },
    yearly:{
      price:55,
    }
  },
  cardThree : {
    monthly:{
      price: 80,
    },
    yearly:{
      price:70,
    }
  }
}

export default function PricingSection({...rest}){
  const [yearly,setYearly] = React.useState(true);
  const {cardOne,cardTwo,cardThree} =  pricingValues;
return(
<Pricing backgroundColor="#f3f4f6" {...rest}>
  <InnerShape/>
  <Container>
  <Pricing.Box pb="40px" pbXL="70px">
  <Row className="align-items-end justify-content-center">
        <Col xs="12" className="col-xl-8 col-lg-7">
          <Pricing.Box className="text-center text-lg-start">
            <Pricing.Title>Live Chat 24/7 Support</Pricing.Title>
          </Pricing.Box>
        </Col>
        <Col xs="12" className="col-xl-4 col-lg-5">
          <Pricing.Button className="pricing-btn">
            <label className="mb-3 mb-lg-0">Monthly</label>
            <div className="toggle-btn form-switch mb-3 mb-lg-0">
              <input className="form-check-input btn-toggle price-deck-trigger" type="checkbox" onChange={() => setYearly(!yearly)} checked={yearly}/>
            </div>
            <label className="mb-3 mb-lg-0">Yearly</label>
            <Pricing.Badge className="badge bg-yellow mb-3 mb-lg-0" as="h3" >SAVE 20%</Pricing.Badge>
          </Pricing.Button>
        </Col>
    </Row>
    </Pricing.Box>
    <Row className="justify-content-center">
      {/* Single Table */}
      <Col xs="12" className="col-lg-4 col-md-6 col-sm-9 col-xs-10">
          <PricingCard cardTitle={"Development"} backgroundColor={"#442cd6"} amount={yearly? cardOne.yearly.price : cardOne.monthly.price} yearlyPackage={yearly}/>
      </Col>
      {/* Single Table */}
      <Col xs="12" className="col-lg-4 col-md-6 col-sm-9 col-xs-10">
          <PricingCard cardTitle={"Optimize & Seo"} backgroundColor={"#ff5722"} amount={yearly? cardTwo.yearly.price : cardTwo.monthly.price} yearlyPackage={yearly}/>
      </Col>
      {/* Single Table */}
      <Col xs="12" className="col-lg-4 col-md-6 col-sm-9 col-xs-10">
          <PricingCard cardTitle={"Designing"} backgroundColor={"#442cd6"} amount={yearly? cardThree.yearly.price : cardThree.monthly.price} yearlyPackage={yearly}/>
      </Col>
    </Row>
  </Container>
</Pricing>

)
}