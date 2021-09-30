import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from '~components';
import CareerCard from './Components/Card'
import Career from './style'
export default function CareerDetailsSection(){
return(
<Career backgroundColor="#f3f4f6">
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-8 col-lg-10">
        <CareerCard/>
      </Col>
    </Row>
    <Row className="row justify-content-center">
      <Col className="col-xl-8 col-lg-10">
        <Career.Wrapper>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">About the job</Career.Title>
            <Career.Text>At Fastland Inc, we put our users first. The world is always
              changing
              so we need Product Managers who are continuously adapting and excited to work on products that affect
              millions of people every day.</Career.Text>
            <Career.Text>In this role, you will work cross-functionally to guide products
              from
              conception to launch by connecting the technical and business worlds. You can break down complex problems
              into steps that drive product development at lightning speed.</Career.Text>
          </Career.ContentBlock>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">Responsibilities</Career.Title>
            <Career.Text>A Senior Data Engineer provides technical and delivery leadership
              for a team of developers working on data integration and processing projects. This role will work with
              stakeholders and other developers to design and implement technical data solutions for the business in a
              way that balances quality, maintainability cost, and time.</Career.Text>
            <Career.List>
              <Career.ListItem>Understand the cloud ecosystem, markets, competition and user requirements in depth.</Career.ListItem>
              <Career.ListItem>Launch new products and features, test their performance and iterate quickly.</Career.ListItem>
              <Career.ListItem>Work collaboratively with Engineering, Marketing, Legal and UX teams on cutting-edge technologies.
              </Career.ListItem>
              <Career.ListItem>Develop innovative solutions to some of the world’s hardest problems by collaborating as needed across
                regions, product areas and functions.</Career.ListItem>
              <Career.ListItem>Launch new products and features, test their performance and iterate quickly.</Career.ListItem>
            </Career.List>
          </Career.ContentBlock>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">Skills &amp; Qualification</Career.Title>
            <Career.List>
              <Career.ListItem>Experience in one or more of the following: cloud infrastructure, big data, security and privacy, development and operations or artificial intelligence/machine learning.</Career.ListItem>
              <Career.ListItem>Experience managing day-to-day technical and design direction.</Career.ListItem>
              <Career.ListItem>Knowledge of multiple functional areas such as product management, engineering, UX/UI, sales, customer support, finance or marketing.
              </Career.ListItem>
              <Career.ListItem>Ability to influence multiple stakeholders without direct authority.</Career.ListItem>
            </Career.List>
          </Career.ContentBlock>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">Whats in it for you</Career.Title>
            <Career.List>
              <Career.ListItem>A remote friendly office with flexible hours - for this role we will consider all applications from those based in Canada with the option to work from our Vancouver office.</Career.ListItem>
              <Career.ListItem>4 weeks vacation plus Christmas Holiday Closure - you're entitled to the week of Christmas off with pay through to and including Jan 1st.</Career.ListItem>
              <Career.ListItem>12 Personal Wellness Days This includes: Sick days, moving days, personal days, etc
              </Career.ListItem>
              <Career.ListItem>One day every 2 weeks of dedicated professional development time</Career.ListItem>
              <Career.ListItem>A paid day off for your birthday</Career.ListItem>
            </Career.List>
          </Career.ContentBlock>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">How to apply</Career.Title>
            <Career.Text mb="30px">At Fastland we celebrate everyone and their multiple intersecting identities. We believe that a panorama of experience allows us to make better decisions together and inspires so that we can better serve our customers and community. Our goal is for metsys user to feel deeply connected to their team through mutual value, respect, and belief.</Career.Text>
            <Career.Button to='/'>Apply for this position</Career.Button>
          </Career.ContentBlock>
        </Career.Wrapper>
      </Col>
    </Row>
  </Container>
</Career>

)
}