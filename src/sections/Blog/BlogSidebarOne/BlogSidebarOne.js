import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Blog from "./style";
import BlogCard from "./Comonent/Card";
import BlogRequlerData from "~data/BlogRequlerData";
import BlogsImg1 from "../../../../public/image/blogs/translator.png";
import Sidebar from "~sections/Blog/Sidebar";
export default function BlogRegular() {
  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <Blog.Box mb="63px">
              <Blog.Subtitle as="h6" fontColor="#5034fc">
                Latest posts
              </Blog.Subtitle>
              <Blog.Title as="h2">Localistars Blog</Blog.Title>
            </Blog.Box>
          </Col>
        </Row>
        <Row>
          <Col
            xs="12"
            className="col-xl-4 col-lg-5 mt-5 mt-lg-0 order-2 order-lg-1"
          >
            <Sidebar />
          </Col>
          <Col xs="12" className="col-xl-8 col-lg-7 order-1 order-lg-2">
            <Row className="justify-content-xl-center">
              <Col xs="12" className="col-xl-12 col-lg-9 col-md-12">
                <BlogCard
                  image={BlogsImg1}
                  badge="Translator"
                  date="November 20, 2021"
                  title="What is the role of translator"
                  user="By inweso GmbH"
                  Like="21K"
                  commentCount="305"
                />
              </Col>
              {BlogRequlerData.map(
                (
                  { image, badge, Like, date, title, user, commentCount },
                  index
                ) => {
                  return (
                    <Col
                      xs="12"
                      className="col-xl-6 col-lg-9 col-md-6"
                      key={"bsp" + index}
                    >
                      <BlogCard
                        image={image}
                        badge={badge}
                        date={date}
                        title={title}
                        user={user}
                        Like={Like}
                        commentCount={commentCount}
                      />
                    </Col>
                  );
                }
              )}
            </Row>
            <Blog.Box mtLG="50px" mt="30px">
              <Row className="justify-content-xl-center">
                <Col xs="12" className="col-xl-8">
                  <Blog.Paginations className="list-unstyled text-xl-center mx-auto">
                    <li>
                      <a href="#">
                        <i className="fa fa-chevron-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                    </li>
                  </Blog.Paginations>
                </Col>
              </Row>
            </Blog.Box>
          </Col>
        </Row>
      </Container>
    </Blog>
  );
}
