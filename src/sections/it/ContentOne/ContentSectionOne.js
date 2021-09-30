import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Progressbar from './Components/Progressbar'
import contentImage from "~image/it-services/content-l3-img-1.png";
export default function ContentSectionOne(){
return(
<Content backgroundColor="#f3f4f6">
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
        <Content.Box mb="65px">
        <SectionTitle subTitle="Our Ability" title="Meet the professionals" text="Top of the list of dreams for many small firms and solo professionals is to win lucrative work with big corporate clients. A few decent projects can keep."
        subTitleProps={{mb:"10px"}}
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        <div className="skillbar-wrapper">
          {/* Single Skill Bar */}
          <Progressbar percentage="65%" barFillColor="#15cda8" title="Prosperity" elemColor="#25373f" mb="30px"/>
          {/*/ .End Single Skill Bar */}
          <Progressbar percentage="80%" barFillColor="#7984ee" title="Quality" elemColor="#25373f" mb="30px"/>
          <Progressbar percentage="40%" barFillColor="#ff971d" title="Guaranty
" elemColor="#25373f" mb="30px"/>
          <Progressbar percentage="60%" barFillColor="#fd346e" title="Services" elemColor="#25373f" mb="30px"/>
        </div>
      </Col>
      <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2">
        <Content.Image>
          <Image src={contentImage}  alt="content" placeholder="blur"/>
        </Content.Image>
      </Col>
    </Row>
  </Container>
</Content>
)
}