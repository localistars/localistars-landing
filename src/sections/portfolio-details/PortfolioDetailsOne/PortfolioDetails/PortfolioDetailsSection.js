import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Masonry from "react-masonry-css"
import PortfolioDetails from "./style"
// import { StaticImage as Img } from "gatsby-plugin-image"
import portfolioData from "./data"
import ModalImage from "react-modal-image";
import PortfolioDetailsLeft from "~image/portfolio/portfolio-details-left.jpg"

const breakpointColumnsObj = {
  default: 2,
  1200: 2,
  992: 2,
  768: 1,
  576: 1,
}
export default function PortfolioDetailsSection() {
  return (
    <PortfolioDetails background="#f3f4f6">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-xl-5 col-lg-6 col-md-8 col-xs-10">
            <PortfolioDetails.Image mb="30px" mbLG="0">
              <img
                src={PortfolioDetailsLeft.src}
                alt="portfolio"
              />
            </PortfolioDetails.Image>
          </Col>
          <Col xs="12" className="col-lg-6 offset-xl-1">
            <PortfolioDetails.Box mb="30px" mbLG="0">
              <Row className="align-items-center">
                <Col className="col-12">
                  <PortfolioDetails.Content mb="30px" mbLG="0">
                    <PortfolioDetails.Title as="h2">
                      PROJECT INFORMATION
                    </PortfolioDetails.Title>
                    <PortfolioDetails.Text>
                      Council are celebrating the incredible achievement of the
                      Companies and Stakeholders. Due to BIM’s fast invasion in
                      all over the world specially in the North America Region,
                      we are one of the top 10 nominated Consultants for Council
                      Architectural/Design Practice of the Year Award. Model
                      Council are celebrating the incredible achievement of
                      these Companies and Stakeholders. achievement of these
                      Companies and Stakeholders.
                    </PortfolioDetails.Text>
                    <PortfolioDetails.Text>
                      In the North America Region, we are one of the top 10
                      nominated Consultants for Council Architectural/Design
                      Practice of the Year Award. Model Council are celebrating
                      the incredible achievement of these Companies and
                      Stakeholders. achievement of these Companies and
                      Stakeholders.
                    </PortfolioDetails.Text>
                  </PortfolioDetails.Content>
                </Col>
                <div className="col-12">
                  <PortfolioDetails.Content>
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
                  </PortfolioDetails.Content>
                </div>
              </Row>
            </PortfolioDetails.Box>
          </Col>
        </Row>
          <Row className="justify-content-center">
            <Col xs="12" className="col-md-12 col-xs-10">
                <PortfolioDetails.MasonryWrapper mt="40px" mtLG="60px">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={`masonry-grid`}
                    columnClassName="masonry-grid_column"
                  >
                    {portfolioData.map(
                      ({ image, id }, index) => {
                        return (
                          <PortfolioDetails.MasonrySingle key={"pd1" + index}>
                            
                              <ModalImage small={image.src} large={image.src} alt="portfolio image"/>
                            
                          </PortfolioDetails.MasonrySingle>
                        )
                      }
                    )}
                  </Masonry>
                </PortfolioDetails.MasonryWrapper>
            </Col>
          </Row>
      </Container>
    </PortfolioDetails>
  )
}
