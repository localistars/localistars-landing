import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Details from './style';
import blogImage from '../../../../public/image/blogs/blog-details-img-1.png';
import Sidebar from '~sections/Common/Sidebar';
import {
  BlogQoute,
  CommentsBoxSection,
  CommentsFormSection
} from './Component';

export default function BlogDetails() {
  return (
    <Details backgroundColor="#f9fafc">
      <Details.Box pb="60px" pbMD="80px" pbLG="130px">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-lg-7">
              <Details.Box mb="30px" mbLG="55px">
                <Details.Title as="h1">
                  Creativo Para Jóvenes:
                  <br /> A UI/UX Designer’s Checklist.
                </Details.Title>
                <Details.MetaInfo>
                  <Details.Link to="/" as={Link}>
                    By David Jones
                  </Details.Link>
                  <Details.Link to="/" as={Link}>
                    Jan 14, 2021
                  </Details.Link>
                </Details.MetaInfo>
              </Details.Box>
              <Details.Box>
                <Details.Image mb="35px" mbLG="55px">
                  <img src={blogImage.src} alt="content" className="w-100" loading="lazy" />
                </Details.Image>
                <Details.Text>
                  Doubling my 9–5 salary several times in my career is something
                  I never thought would happen. My career went from startup land
                  to call center operator in a short space of time.
                </Details.Text>
                <Details.Text>
                  That meant going from six-figures down to the minimum wage in
                  my home country of Australia. And to top it off, I have no
                  degrees in anything business related — unless you count a
                  sound engineering qualification.
                </Details.Text>
                <Details.Text>
                  If an uneducated guy from the home of the Kangaroo can double
                  their salary, there is definitely hope for you. Popular career
                  websites like “Seek” suggest the typical advice about doing
                  better in your performance review or getting more education
                  from a university. This advice is out of date and I have
                  watched many colleagues fall for this trap and only end up
                  disappointed.
                </Details.Text>
                <Details.Text>
                  Doubling your salary, or at the very least increasing it
                  significantly, is about breaking the norm and trying a few
                  things that are a bit more radical as you’re about to see with
                  these simple tips below.
                </Details.Text>
                <Details.Box>
                  <Details.SubTitle mb="20px" as="h4">
                    The goal should be more than money
                  </Details.SubTitle>
                  <Details.Text>
                    Okay so you can make more money but if that’s your only
                    goal, the extra zeroes on your bank balance will get really
                    boring real quick.
                  </Details.Text>
                </Details.Box>
                <Details.Box>
                  <BlogQoute text="You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills." />
                </Details.Box>
                <Details.Text>
                  If an uneducated guy from the home of the Kangaroo can double
                  their salary, there is definitely hope for you. Popular career
                  websites like “Seek” suggest the typical advice about doing
                  better in your performance review or getting more education
                  from a university. This advice is out of date and I have
                  watched many colleagues fall for this trap and only end up
                  disappointed.
                </Details.Text>
                <Details.Box>
                  <Details.SubTitle mb="20px" as="h4">
                    Key Summary
                  </Details.SubTitle>
                  <Details.Text>
                    By purchasing or downloading resource (“item” or “file”) you
                    are being granted a license to use these files for specific
                    uses under certain conditions. Ownership remains with
                    UXTheme, and you are required to abide by the following
                    licensing terms.
                  </Details.Text>
                  <Details.List as="ul">
                    <li>
                      You have rights for royalty free use of our resources for
                      any or all of your personal and commercial projects.
                    </li>
                    <li>
                      You are not required to attribute or link to UXTheme in
                      any of projects.
                    </li>
                    <li>
                      We reserve the rights to change prices and revise the
                      resources usage policy in any moment.
                    </li>
                  </Details.List>
                </Details.Box>
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
      <Details.Box
        pt="60px"
        pb="60px"
        pt="80px"
        pbMD="80px"
        ptLG="120px"
        pbLG="60px"
        backgroundColor="#f3f4f6"
      >
        <Container>
          <Row>
            <Col xs="12" className="col-lg-7">
              <CommentsBoxSection />
              <CommentsFormSection />
            </Col>
          </Row>
        </Container>
      </Details.Box>
    </Details>
  );
}
