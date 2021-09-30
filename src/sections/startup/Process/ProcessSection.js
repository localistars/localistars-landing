import React from 'react'
import {Link} from "~components"
import ProcessCard from './Components/Card'
import Process from './style'
import ProcessData from "~data/startup/Process"
import { Container, Row, Col } from 'react-bootstrap'
export default function ProcessSection({ ...rest }){
return(
<Process {...rest}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-xl-start">
        <Col xs="12" className="col-xl-7 col-lg-8 text-center text-xl-start">
            <Process.Subtitle mbLG="10px" as="h5" fontColor="#5034fc">Our Process</Process.Subtitle>
            <Process.Title as="h2" mb="40px" mbLG="80px">Future is brighter when you're<br className="d-none d-xxl-block" /> stratigicaly more prepared</Process.Title>
      </Col>
      <Col xs="12" className="col-xl-11">
        <Process.Box as="div" className="widgets">
          <Row className="justify-content-center justify-content-xl-between">
          {ProcessData.map(({title,text,icon,iconBackground, id},index)=>{
             return(
            <Col xs="12" className="col-lg-3 col-md-4 col-xs-6" key={index}>
               <ProcessCard icon={icon} title={title} text={text}/>
            </Col>
               )
              })}
          </Row>
          </Process.Box>
      </Col>
    </Row>
  </Container>
</Process>

)
}