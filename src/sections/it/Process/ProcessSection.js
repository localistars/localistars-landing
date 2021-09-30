import React from 'react'
import ProcessCard from './Components/Card'
import { Container, Row, Col } from 'react-bootstrap'
import Process from "./style"
import ProcessData from "~data/it/Process"
export default function ProcessSection({...rest }){
return(
<Process>
  <Container>
    <Process.Box  pb="30p" pbXL="50px">
      <Row>
        <Col xs="12" className="text-center">
            <Process.Subtitle as="h5">Our Process</Process.Subtitle>
            <Process.Title as="h2">Digital system for your company</Process.Title>
        </Col>
      </Row>
    </Process.Box>
    <Process.Widgets as="div">
    <Row className="justify-content-center">
        {ProcessData.map(({title,text,icon,iconBackground, id})=>{
             return(
            <Col xs="12" className="col-lg-4 col-md-6 col-xs-6 single-widget text-center"  key={id}>
                <ProcessCard icon={icon} iconBackground={iconBackground} title={title} text={text}/>
            </Col>
         )
        })}
    </Row>
    </Process.Widgets>
  </Container>
</Process>

)
}