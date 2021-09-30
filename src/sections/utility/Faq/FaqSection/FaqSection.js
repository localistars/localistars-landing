import React from 'react'
import { Accordion,Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { AccordionItemFull } from "~components/Accordion";
import TabList from './Component/Tab'
import Faq from './style'
export default function FaqSection(){
return(
<Faq>
  <Container>
    <Row className="justify-content-center">
      <Faq.Box>
        <Faq.Title as="h3" mb="61px">
          Frequently Asked Question
        </Faq.Title>
      </Faq.Box>
    </Row>
    <Faq.Body>
    <Faq.TabWrapper as={Tab.Container}
          id="left-tabs-example"
          defaultActiveKey="first">
      <Row className="justify-content-center">
        <Col className="col-xl-10">
          <Row className="justify-content-center justify-md-content-start">
            <div className="col-xl-3 col-lg-4 col-md-5 col-xs-8 mb-6 mb-lg-0">
                <TabList as={Nav}>
                <Nav.Link
                  eventKey="first"
                  className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  General
                  
                </Nav.Link>
                <Nav.Link
                  eventKey="second"
                  className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                   Accounts
                </Nav.Link>
                <Nav.Link
                  eventKey="third"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  Sales
                </Nav.Link>
                <Nav.Link
                  eventKey="fourth"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  Support
                </Nav.Link>
                <Nav.Link
                  eventKey="fifth"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  License
                </Nav.Link>
                <Nav.Link
                  eventKey="sixth"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  Refund
                </Nav.Link>
                </TabList>
            </div>
            <Col className="col-xl-9 col-lg-8 col-md-11">
              

            <Tab.Content className="tab-content tab-content--feature">
              <Tab.Pane eventKey="first">
                  <Faq.Accordion>
                  <Accordion defaultActiveKey="1a">
                  <AccordionItemFull question="Can I use Fastland for my clients?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="1a"/>
                  <AccordionItemFull question="Does it work with WordPress?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="2a"/>
                  <AccordionItemFull question="Do I get free updates?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="3a"/>
                  <AccordionItemFull question="Will you provide support?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="4a"/>
                  </Accordion>
                  </Faq.Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                  <Faq.Accordion>
                  <Accordion defaultActiveKey="1b">
                  <AccordionItemFull question="Where do I find my fastland product key?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="1b"/>
                  <AccordionItemFull question="Does it work with WordPress?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="2b"/>
                  <AccordionItemFull question=" What happens after I download?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="3b"/>
                  <AccordionItemFull question="Will you provide support?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="4b"/>
                  </Accordion>
                  </Faq.Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                  <Faq.Accordion>
                  <Accordion defaultActiveKey="1c">
                  <AccordionItemFull question="I am having trouble downloading, what else should I do?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="1c"/>
                  <AccordionItemFull question="How long does it take to download?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="2c"/>
                  <AccordionItemFull question="Do I get free updates?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="3c"/>
                  <AccordionItemFull question="Will you provide support?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="4c"/>
                  </Accordion>
                  </Faq.Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                  <Faq.Accordion>
                  <Accordion defaultActiveKey="1d">
                  <AccordionItemFull question="Will you provide support?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="1d"/>
                  <AccordionItemFull question="Does it work with WordPress?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="2d"/>
                  <AccordionItemFull question="Do I get free updates?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="3d"/>
                  <AccordionItemFull question="Can I use Fastland for my clients?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="4d"/>
                  </Accordion>
                  </Faq.Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                  <Faq.Accordion>
                  <Accordion defaultActiveKey="1e">
                  <AccordionItemFull question="Where do I find my fastland license key?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="1e"/>
                  <AccordionItemFull question="How do I activate my fastland?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="2e"/>
                  <AccordionItemFull question="Can I purchase backup file?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="3e"/>
                  <AccordionItemFull question="Will you provide support?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="4e"/>
                  </Accordion>
                  </Faq.Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                  <Faq.Accordion>
                  <Accordion defaultActiveKey="1f">
                  <AccordionItemFull question="How do I request a refund?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="1f"/>
                  <AccordionItemFull question="My refund request was denied. Can I contest this decision?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="2f"/>
                  <AccordionItemFull question="Do I get free updates?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="3f"/>
                  <AccordionItemFull question="Will you provide support?" answer="With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." accKey ="4f"/>
                  </Accordion>
                  </Faq.Accordion>
              </Tab.Pane>
            </Tab.Content>
            <Faq.ButtonGroup mt="50px">
            <p>Haven’t got your answer?<a className="btn-link text-readical-red ms-2" href="#">Contact our support
            now</a>
            </p>
            </Faq.ButtonGroup>
          </Col>
          </Row>
        </Col>
      </Row>
      </Faq.TabWrapper>
    </Faq.Body>
  </Container>
</Faq>

)
}