import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "~components";
import Details from "./style";
import Image from "next/image";
import blogImage from "~image/blogs/blog-details-img-1.png";
import Sidebar from "~sections/Common/Sidebar";
import {
  BlogQoute,
  CommentsBoxSection,
  CommentsFormSection,
} from "./Component";

export default function MdxBlogDetails({ mdxComponent, title, publishedAt }) {
  return (
    <Details backgroundColor="#f9fafc">
      <Details.Box pb="60px" pbMD="80px" pbLG="130px">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-lg-7">
              <Details.Box mb="30px" mbLG="55px">
                <Details.Title as="h1">
                  {title}
                </Details.Title>
                <Details.MetaInfo>
                  <Details.Link to="/" as={Link}>
                    {publishedAt}
                  </Details.Link>
                </Details.MetaInfo>
              </Details.Box>
              <Details.Box>
                {mdxComponent}

                <Details.Tag mt="50px">
                  <Details.SubTitle mr="25px" mt="10px" as="h4">
                    Tags:
                  </Details.SubTitle>
                  <Details.TagList>
                    <li>
                      <Link to="/">Freelance</Link>
                    </li>
                    <li>
                      <Link to="/">Education</Link>
                    </li>
                    <li>
                      <Link to="/">Marketing</Link>
                    </li>
                    <li>
                      <Link to="/">Job</Link>
                    </li>
                    <li>
                      <Link to="/">Freelance</Link>
                    </li>
                  </Details.TagList>
                </Details.Tag>
                <Details.Tag mt="30px">
                  <Details.SubTitle mr="25px" as="h4">
                    Share:
                  </Details.SubTitle>
                  <Details.SocialList>
                    <li>
                      <Link to="/">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                  </Details.SocialList>
                </Details.Tag>
                <Details.Pagination mt="30px" mtLG="75px" mb="50px">
                  <Details.PrevButton>
                    <Link className="btn-link" to="/">
                      <i className="fa fa-arrow-left" />
                      prev
                    </Link>
                  </Details.PrevButton>
                  <Details.NextButton>
                    <Link className="btn-link" to="/">
                      next
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </Details.NextButton>
                </Details.Pagination>
              </Details.Box>
            </Col>
            <Col xs="12" className="col-xl-4 offset-xl-1 col-lg-5">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </Details.Box>
    </Details>
  );
}
