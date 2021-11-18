import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './Components/SectionTitle';
import Integration from './style';
import BrandLogoLine1 from '../../../../public/image/brand-logo/brand-line-1.png';
import BrandLogoLine2 from '../../../../public/image/brand-logo/brand-line-2.png';
import BrandLogoLine3 from '../../../../public/image/brand-logo/brand-line-3.png';
// import BrandLogoLine4 from "~image/brand-logo/brand-line-4.png";
// import BrandLogoLine5 from "~image/brand-logo/brand-line-5.png";
// import BrandLogoLine6 from "~image/brand-logo/brand-line-6.png";
// import BrandLogoLine7 from "~image/brand-logo/brand-line-7.png";
// import BrandLogoLine8 from "~image/brand-logo/brand-line-8.png";
// import BrandLogo1 from "~image/brand-logo/brand-logo-1.png";
// import BrandLogo2 from "~image/brand-logo/brand-logo-2.png";
// import BrandLogo3 from "~image/brand-logo/brand-logo-3.png";
// import BrandLogo4 from "~image/brand-logo/brand-logo-4.png";
// import BrandLogo5 from "~image/brand-logo/brand-logo-5.png";
// import BrandLogo6 from "~image/brand-logo/brand-logo-6.png";
// import BrandLogo7 from "~image/brand-logo/brand-logo-7.png";
// import BrandLogo8 from "~image/brand-logo/brand-logo-8.png";
// import BrandLogo9 from "~image/brand-logo/brand-logo-9.png";

const IntegrationSection = ({ ...rest }) => {
  return (
    <Integration backgroundColor="#f2f5fb">
      <Container>
        <Row className="row justify-content-center">
          <Col className="col-xl-10">
            <Integration.Box className="text-center">
              <SectionTitle
                title="Software Integrations"
                text="Create custom landing pages with Fastland that converts <br class='d-none d-sm-block'> more visitors than any website."
              />
              <Integration.Button to="/">Explore All Apps</Integration.Button>
            </Integration.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-5 col-lg-6 col-md-9">
            <div className="brand-image-group brand-image-group--l2">
              {/* <div className="brand-image-group--l2__image--main circle-126">
                <div className="img-0">
                  <Image src={BrandLogo1} alt="integration-1" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-1 circle-91">
                <div className="brand-logo-1">
                  <Image src={BrandLogo2} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-2 circle-103">
                <div className="brand-logo-2">
                  <Image src={BrandLogo3} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-3 circle-98">
                <div className="brand-logo-3">
                  <Image src={BrandLogo4} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-4 circle-99">
                <div className="brand-logo-4">
                  <Image src={BrandLogo5} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-5 circle-95">
                <div className="brand-logo-5">
                  <Image src={BrandLogo6} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-6 circle-113">
                <div className="brand-logo-6">
                  <Image src={BrandLogo7} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-7 circle-88">
                <div className="brand-logo-7">
                  <Image src={BrandLogo8} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__single brand-image-group--l2__img-8 circle-108">
                <div className="brand-logo-8">
                  <Image src={BrandLogo9} alt="integration" />
                </div>
              </div>
              <div className="brand-image-group--l2__line-1">
                <Image src={BrandLogoLine1} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-2">
                <Image src={BrandLogoLine2} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-3">
                <Image src={BrandLogoLine3} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-4">
                <Image src={BrandLogoLine4} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-5">
                <Image src={BrandLogoLine5} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-6">
                <Image src={BrandLogoLine6} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-7">
                <Image src={BrandLogoLine7} alt="integration" />
              </div>
              <div className="brand-image-group--l2__line-8">
                <Image src={BrandLogoLine8} alt="integration" />
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Integration>
  );
};

export default IntegrationSection;
