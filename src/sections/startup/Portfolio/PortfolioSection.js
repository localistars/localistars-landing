import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./Components/SectionTitle";
import Image from "next/image";
import PortfolioImageOne from "~image/portfolio/l8-portfolio-img-4.jpg";
import PortfolioImageTwo from "~image/portfolio/l8-portfolio-img-2.jpg";
import PortfolioImageThree from "~image/portfolio/l8-portfolio-img-3.jpg";
import Protfolio from "./style";
import { Link } from "~components";
import Slider from "react-slick";

const Slide = ({
  image,
  totalItem = 0,
  currentItemCount = 0,
  title,
  userName,
  text,
  link = "/",
}) => {
  return (
    <Row className="align-items-center d-flex">
      <Col xs="12" className="col-lg-6 col-md-10">
        <Protfolio.Content>
          <Protfolio.ImageContent mb="30px" mbLG="0">
            {image}
            <Protfolio.Shape backgroundColor="#FCDC00">
              <Protfolio.ShapeTitle as="h1" fontColor="#fff">
                {Number(currentItemCount) < 10
                  ? "0" + Number(currentItemCount)
                  : Number(currentItemCount)}
              </Protfolio.ShapeTitle>
            </Protfolio.Shape>
          </Protfolio.ImageContent>
        </Protfolio.Content>
      </Col>
      <Col xs="12" className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
        <Protfolio.Content>
          <Protfolio.SingleContent>
            <Protfolio.SubTitle as="h6" fontColor="rgba(38, 39, 41, 0.7)">
              <span>
                Project{" "}
                {Number(currentItemCount) < 10
                  ? "0" + Number(currentItemCount)
                  : Number(currentItemCount)}
              </span>
              /{" "}
              {Number(totalItem) < 10
                ? "0" + Number(totalItem)
                : Number(totalItem)}
            </Protfolio.SubTitle>
            <Protfolio.Title as="h2">{title}</Protfolio.Title>

            <Protfolio.TitleSmall fontColor="#262729">
              By {userName ? userName : "Anonymous"}
            </Protfolio.TitleSmall>
            <Protfolio.Text>{text}</Protfolio.Text>
            <Protfolio.Button as={Link} to={link}>
              Launch project
            </Protfolio.Button>
          </Protfolio.SingleContent>
        </Protfolio.Content>
      </Col>
    </Row>
  );
};

export default function ProtfolioSection() {
  const elSlider = React.useRef();

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: false,
    autoplay: true,
    fade: true,
  };
  return (
    <Protfolio>
      <Container>
        <div className="row justify-content-center">
          <Col className="col-xl-8 text-center">
            {/* Section Title */}
            <SectionTitle
              subTitle="Portfolio"
              title="The Works We Are Proud Of"
              titleProps={{ mb: "40px", mbLG: "75px" }}
              subTitleProps={{ mb: "10px", fontColor: "#5034fc" }}
            />
            {/*/ .Section Title */}
          </Col>
        </div>
        <Slider
          ref={elSlider}
          className="testimonial-slider"
          {...sliderConfig1}
        >
          <Slide
            image={
              <img
                src={PortfolioImageOne.src}
                alt="content"
                placeholder="blur"
                className="w-100"
              />
            }
            totalItem="3"
            currentItemCount="1"
            title="Principal of Product Design"
            text="We are idea generators,goal seekers, challenge-thirsty professionals creators of unique interner projects. we deliver unconventional solutions, combining the most advanced web technologies, modern design and bold communication. For us, each project is a meaningful adventure, in which we become partners with our clients, on the road to perfection "
            userName="Terrance Harrison"
          />
          <Slide
            image={
              <img
                src={PortfolioImageTwo.src}
                alt="content"
                placeholder="blur"
                className="w-100"
              />
            }
            totalItem="3"
            currentItemCount="2"
            title="Principal of Product Design"
            text="We are idea generators,goal seekers, challenge-thirsty professionals creators of unique interner projects. we deliver unconventional solutions, combining the most advanced web technologies, modern design and bold communication. For us, each project is a meaningful adventure, in which we become partners with our clients, on the road to perfection "
            userName="Terrance Harrison"
          />
          <Slide
            image={
              <img
                src={PortfolioImageThree.src}
                alt="content"
                placeholder="blur"
                className="w-100"
              />
            }
            totalItem="3"
            currentItemCount="3"
            title="Principal of Product Design"
            text="We are idea generators,goal seekers, challenge-thirsty professionals creators of unique interner projects. we deliver unconventional solutions, combining the most advanced web technologies, modern design and bold communication. For us, each project is a meaningful adventure, in which we become partners with our clients, on the road to perfection "
            userName="Terrance Harrison"
          />
        </Slider>
      </Container>
    </Protfolio>
  );
}
