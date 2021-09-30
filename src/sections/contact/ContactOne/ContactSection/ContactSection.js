import React from 'react'
import Contact from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function ContactOne(){
return(
<Contact backgroundColor="#f3f4f6">
  <Container>
    <Row>
      <Col className="col-xl-7 col-lg-7">
        <Contact.Box >
            <SectionTitle
            subTitle="Contact Us" 
            title="Send A Message"
            text="When, while lovely valley teems with vapour around meand <br class='d-non d-lg-block'/>
            meridian the upper impenetrable."
            subTitleProps={{mb:"10px"}}
            titleProps={{mb:"10px",as:"h2"}}
            mb="50px" />
        </Contact.Box>
        <Contact.From>
            <form action="./">
                    <Row>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput" />
                          <label htmlFor="floatinginput">Your Email</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" />
                          <label htmlFor="floatinginput2">Phone number</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea3"/>
                          <label htmlFor="floatingTextarea3">Your Message Here </label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <Row className="align-items-center mt-3">
                          <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                            <div className="form-check d-flex align-items-center">
                              <input className="form-check-input bg-white float-none mt-0" type="checkbox" defaultValue id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                Your email address will not be published. Required fields are marked *
                              </label>
                            </div>
                          </div>
                          <Col xs="12" className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
                            <Contact.Button>Send Message</Contact.Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </form>
        </Contact.From>
      </Col>
      <Col xs="12" className="col-xl-5 col-lg-5">
        <Contact.WidgetsBox className="contact-widget-box">
            <Contact.WidgetsBoxTitle as="h2">Get In Touch</Contact.WidgetsBoxTitle>
            <Contact.WidgetsBoxText as="p">therefore always free from <br className="d-none d-xl-block" />  repetition, injected humour, or <br className="d-none d-xl-block" /> non-characteristic</Contact.WidgetsBoxText>
          <Row>
            <Col xs="12" className="col-lg-12 col-sm-6">
              <Contact.Widgets>
                <Contact.WidgetsIcon>
                  <i className="fas fa-envelope" />
                </Contact.WidgetsIcon>
                <Contact.WidgetsBoxBody>
                  <Contact.WidgetsTitle as="h3">visit us :</Contact.WidgetsTitle>
                  <Contact.WidgetsText as="p">27 Division St, New York, <br className="d-block" /> NY 10002, USA</Contact.WidgetsText>
                </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
            <Col xs="12" className="col-lg-12 col-sm-6 active">
            <Contact.Widgets>
              <Contact.WidgetsIcon className="active">
                <i className="fas fa-phone-alt" />
              </Contact.WidgetsIcon>
              <Contact.WidgetsBoxBody>
                <Contact.WidgetsTitle as="h3">mail us :</Contact.WidgetsTitle>
                <Contact.WidgetsText as="p">phlox@mail.com <br className="d-block" /> contact@mail.com</Contact.WidgetsText>
              </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
            <Col xs="12" className="col-lg-12 col-sm-6">
            <Contact.Widgets>
              <Contact.WidgetsIcon>
                <i className="fas fa-map-marker-alt" />
              </Contact.WidgetsIcon>
              <Contact.WidgetsBoxBody>
                <Contact.WidgetsTitle as="h3">call us :</Contact.WidgetsTitle>
                <Contact.WidgetsText as="p">+8 (123) 985 789 <br className="d-block" /> +1 (123) 456 789</Contact.WidgetsText>
              </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
          </Row>
        </Contact.WidgetsBox>
      </Col>
    </Row>
  </Container>
</Contact>

)
}