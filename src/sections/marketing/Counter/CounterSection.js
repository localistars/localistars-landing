import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import Counter from './style'
import LazyLoad from "react-lazyload";
import { SuperTag } from "~components";

export default function CounterSection() {
  return (
      <Counter>
        <Container>
            <Row className="row justify-content-center text-center">
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                    <Counter.Title as="h3" fontColor="#2b59ff">
                      <CountUp className="counter" start={0} end={15} duration={2.75}/>M
                    </Counter.Title>
                    <Counter.Text>
                      <SuperTag value="New visitors <br className='d-none d-xs-block' /> every month. "/>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                    <Counter.Title as="h3" fontColor="#ff5722">
                    <CountUp className="counter" start={0} end={49} duration={2.75}/>%
                    </Counter.Title>
                    <Counter.Text>
                      <SuperTag value="Extra conversion<br className='d-none d-xs-block' /> on any niche."/>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                    <Counter.Title as="h3" fontColor="#22cc74">
                     $<CountUp className="counter" start={0} end={2} duration={2.75}/>M
                    </Counter.Title>
                    <Counter.Text>
                      <SuperTag value="Extra saved by <br className='d-none d-xs-block' /> customers."/>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
              <Col xs="6" className="col-6 col-lg-3 col-md-4 col-xs-6">
                <LazyLoad>
                  <Counter.Single>
                    <Counter.Title as="h3" fontColor="#ff971d">
                      <span className="counter">93</span>%
                    </Counter.Title>
                    <Counter.Text>
                      <SuperTag value="Success rate on <br className='d-none d-xs-block' /> last 05 years."/>
                    </Counter.Text>
                  </Counter.Single>
                </LazyLoad>
              </Col>
            </Row>
        </Container>
      </Counter>
  )
}
