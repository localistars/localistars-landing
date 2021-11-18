import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './Components/SectionTitle';
import { Link } from '~components';
import About from './style';
import prefix from '~lib/prefix';

export default function ManageSection() {
  return (
    <About>
      <Container>
        <Row className="align-items-center justify-content-center g-0">
          <Col xs="12" className="col-xxl-6 col-lg-5 col-md-10">
            <About.Image>
              <img
                src={`${prefix}/image/translator/about-us-l5-img.png`}
                alt="content"
                className="w-100"
              />
            </About.Image>
          </Col>
          <Col className="col-xxl-6 col-lg-7 col-md-10">
            <About.Box>
              {/* Section Title */}
              <About.Content>
                <SectionTitle
                  subTitle="Individual management"
                  title="Manage your team"
                  text="You can add all your team-members to your organisation.

Each user can be granted individual rights so they get access to the relevant parts of your workflow.

Keep working with partners you trust."
                  subTitleProps={{
                    mb: '10px',
                    className: 'subline',
                    fontColor: '#5034fc'
                  }}
                  titleProps={{ mb: '10px', as: 'h2' }}
                  mb="69px"
                />
              </About.Content>

              {/*/ .Section Title */}
            </About.Box>
          </Col>
        </Row>
      </Container>
    </About>
  );
}
