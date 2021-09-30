import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Terms from './style'
export default function TermsCondition(){
return(
<Terms>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-7 col-lg-8 col-md-11 text-center">
        <Terms.Box>
          <Terms.Title as="h2">Terms &amp;
            Conditions</Terms.Title>
        </Terms.Box>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col className="col-xxl-8 col-xl-9 col-lg-10">
        <Terms.Content>
          <Terms.Text>By accessing and placing an order with
            UXTheme, you confirm that you are in agreement with and bound by the terms and conditions
            contained in the Terms Of Use outlined below. These terms apply to the entire website and
            any email or other type of communication between you and UXTheme. Under no circumstances
            shall UXTheme team be liable for any direct, indirect, special, incidental or consequential
            damages, including, but not limited to, loss of data or profit, arising out of the use, or
            the inability to use, the materials on this site, even if UXTheme team or an authorized
            representative has been advised of the possibility of such damages. If your use of materials
            from this site results in the need for servicing, repair or correction of equipment or data,
            you assume any costs thereof. UXTheme will not be responsible for any outcome that may occur
            during the course of usage of our resources.We reserve the rights to change prices and
            revise the resources usage policy in any moment.</Terms.Text>
          <Terms.ContentBox>
            <Terms.TitleSmall as="h5">License</Terms.TitleSmall>
            <Terms.Text>By purchasing or downloading
              resource (“item” or “file”) you are being granted a license to use these
              files for specific uses under certain conditions. Ownership remains with UXTheme,
              and you are required to abide by the following licensing terms.</Terms.Text>
          </Terms.ContentBox>
          <Terms.ContentBox>
            <Terms.TitleSmall as="h5">Security</Terms.TitleSmall>
            <Terms.Text>By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following licensing terms.</Terms.Text>
            <Terms.List>
              <Terms.ListItem>You have rights for royalty free use of our resources for any or all of your personal and commercial projects.</Terms.ListItem>
              <Terms.ListItem>You are not required to attribute or link to UXTheme in any of projects.</Terms.ListItem>
              <Terms.ListItem>We reserve the rights to change prices and revise the resources usage policy in any moment.</Terms.ListItem>
            </Terms.List>
          </Terms.ContentBox>
          <Terms.ContentBox>
            <Terms.TitleSmall as="h5">Embedded content from other websites</Terms.TitleSmall>
            <Terms.Text>Articles on this site may
              include
              embedded content (e.g. videos, images, articles, etc.). Embedded content from other
              websites behaves in the exact same way as if the visitor has visited the other
              website.</Terms.Text>
            <Terms.Text> These websites may collect
              data
              about you, use cookies, embed additional third-party tracking, and monitor your
              interaction with that embedded content, including tracking your interaction with the
              embedded content if you have an account and are logged in to that website.</Terms.Text>
          </Terms.ContentBox>
          <Terms.ContentBox>
            <Terms.TitleSmall as="h5">Changes about terms</Terms.TitleSmall>
            <Terms.Text>If we change our terms of
              use we
              will post those changes on this page. Registered users will be sent an email that
              outlines changes made to the terms of use.</Terms.Text>
          </Terms.ContentBox>
        </Terms.Content>
      </Col>
    </Row>
  </Container>
</Terms>

)
}