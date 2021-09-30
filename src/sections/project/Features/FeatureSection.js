
import React from 'react'
import { Tab, Nav, Container, Col, Row} from "react-bootstrap";
import FeatureTabPenLayout from './Components/FeatureTabPenLayout'
import FeatureImage from './Components/FeatureImages'
import Feature from './style'
import featureSectionData from '~data/project/features'
import FeatureWidgetsBlock from './Components/FeatureWidgetsBlock'
export default function FeatureSection(){
return(
<Feature background="#6a26da">
  <Container className="container">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
        >
    <Feature.Tab>
      <Row className="justify-content-center">
        <Col className="col-xl-7 col-lg-8 col-md-10">
            <Nav className="nav nav-tabs" id="myTab" role="tablist">
                <Nav.Link
                  eventKey="first"
                  className="nav-link"
                >Project Management
                </Nav.Link>

                <Nav.Link
                  eventKey="second"
                  className="nav-link"
                >Task Management
                </Nav.Link>
                <Nav.Link
                  eventKey="third"
                  className="nav-link"
                >Dark Mode
                </Nav.Link>
            </Nav>
        </Col>
      </Row>
      <Tab.Content className="tab-content">
        <Tab.Pane eventKey="first">
          <FeatureTabPenLayout 
          imageBlock={<FeatureImage/>}
          contentBlock={<FeatureWidgetsBlock widgetData={featureSectionData.tabWidget1}/>}
          contentBlockTitle={featureSectionData.featureTabTitle1}
          />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <FeatureTabPenLayout 
          imageBlock={<FeatureImage/>}
          contentBlock={<FeatureWidgetsBlock widgetData={featureSectionData.tabWidget1}/>}
          contentBlockTitle={featureSectionData.featureTabTitle2}
          />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <FeatureTabPenLayout 
          imageBlock={<FeatureImage/>}
          contentBlock={<FeatureWidgetsBlock widgetData={featureSectionData.tabWidget1}/>}
          contentBlockTitle={featureSectionData.featureTabTitle3}
          />
        </Tab.Pane>
      </Tab.Content>
    </Feature.Tab>
      </Tab.Container>
  </Container>
</Feature>
)
}