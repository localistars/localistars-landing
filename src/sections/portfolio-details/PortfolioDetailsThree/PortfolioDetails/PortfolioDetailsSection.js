import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import portfolioFullImage from '../../../../../public/image/portfolio/portfolio-full-img-6.jpg';
import portfolioFullImage2 from '../../../../../public/image/portfolio/portfolio-full-img-1.jpg';
import portfolioFullImage3 from '../../../../../public/image/portfolio/portfolio-full-img-2.jpg';
import portfolioFullImage4 from '../../../../../public/image/portfolio/portfolio-full-img-3.jpg';
import portfolioFullImage5 from '../../../../../public/image/portfolio/portfolio-full-img-4.jpg';
import PortfolioDetails from './style';
import { Link } from '~components';
export default function PortfolioDetailsSection() {
  return (
    <PortfolioDetails backgroundColor="#f3f4f6">
      <Container>
        <PortfolioDetails.Image>
          <img src={portfolioFullImage.src} alt="portfolio" loading="lazy" />
        </PortfolioDetails.Image>
        <Row className="align-items-center">
          <Col xs="12" className="col-xxl-7 col-xl-8 col-lg-7">
            <PortfolioDetails.Box>
              <PortfolioDetails.Title as="h2">
                PROJECT INFORMATION
              </PortfolioDetails.Title>
              <PortfolioDetails.Text>
                Council are celebrating the incredible achievement of the
                Companies and Stakeholders. Due to BIM’s fast invasion in all
                over the world specially in the North America Region, we are one
                of the top 10 nominated Consultants for Council
                Architectural/Design Practice of the Year Award. Model Council
                are celebrating the incredible achievement of these Companies
                and Stakeholders. achievement of these Companies and
                Stakeholders.
              </PortfolioDetails.Text>
              <PortfolioDetails.Text>
                In the North America Region, we are one of the top 10 nominated
                Consultants for Council Architectural/Design Practice of the
                Year Award. Model Council are celebrating the incredible
                achievement of these Companies and Stakeholders. achievement of
                these Companies and Stakeholders.
              </PortfolioDetails.Text>
            </PortfolioDetails.Box>
          </Col>
          <Col xs="12" className="col-xxl-4 offset-xxl-1 col-xl-4 col-lg-5">
            <PortfolioDetails.Box>
              <PortfolioDetails.List as="ul">
                <li>
                  <span>Project Name:</span>Systemio
                </li>
                <li>
                  <span>Client:</span>Minimalist International
                </li>
                <li>
                  <span>Finshing Date:</span>01 january, 2021
                </li>
                <li>
                  <span>Duration:</span>2 weeks
                </li>
                <li>
                  <span>Category:</span>Marketing, SEO
                </li>
              </PortfolioDetails.List>
            </PortfolioDetails.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-md-12 col-xs-10">
            <PortfolioDetails.BigImage mb="25px" mt="50px">
              <a href="/" className="portfolio__single popup-img">
                <img
                  src={portfolioFullImage2.src}
                  alt="portfolio"
                  placeholder="blurred"
                  loading="lazy"
                />
              </a>
            </PortfolioDetails.BigImage>
          </Col>
          <Col xs="12" className="col-xl-4">
            {/* Single Grid */}
            <PortfolioDetails.GridImage mb="30px" mbLG="0">
              <a
                href="./image/jpg/portfolio-full-img-2.jpg"
                className="portfolio__single popup-img"
                data-fancybox="images"
              >
                <img src={portfolioFullImage3.src} alt="portfolio" loading="lazy" />
              </a>
            </PortfolioDetails.GridImage>
            {/*/ .Single Grid */}
          </Col>
          <Col xs="12" className="col-xl-4">
            {/* Single Grid */}
            <PortfolioDetails.GridImage mb="30px" mbLG="0">
              <a
                href="./image/jpg/portfolio-full-img-2.jpg"
                className="portfolio__single popup-img"
                data-fancybox="images"
              >
                <img src={portfolioFullImage4.src} alt="portfolio" loading="lazy" />
              </a>
            </PortfolioDetails.GridImage>
            {/*/ .Single Grid */}
          </Col>
          <Col xs="12" className="col-xl-4">
            {/* Single Grid */}
            <PortfolioDetails.GridImage mb="30px" mbLG="0">
              <a
                href="./image/jpg/portfolio-full-img-2.jpg"
                className="portfolio__single popup-img"
                data-fancybox="images"
              >
                <img src={portfolioFullImage5.src} alt="portfolio" loading="lazy" />
              </a>
            </PortfolioDetails.GridImage>
            {/*/ .Single Grid */}
          </Col>
        </Row>
        <PortfolioDetails.ButtonGroup mtLG="50px" mt="30px">
          {/* <a className="btn-link" as={Link} to="/">
            <i className="fa fa-arrow-left" />
            Previous project
          </a>
          <a className="btn-link" as={Link} to="/">
            Next project
            <i className="fa fa-arrow-right" />
          </a> */}
        </PortfolioDetails.ButtonGroup>
      </Container>
    </PortfolioDetails>
  );
}
