import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResetForm from "./style";
import ResetBgImg from "../../../../public/image/accounts/reset-pass-img.jpg";
import { Link } from "~components";
export default function ResetSection() {
  return (
    <ResetForm backgroundColor="#f3f4f6">
      <Container className="position-static">
        <Row className="align-items-center justify-content-center position-static">
          <Col xs="12" className="col-xl-6 col-lg-6 position-static">
            <ResetForm.Image backgroundImage={ResetBgImg.src}></ResetForm.Image>
            c
          </Col>
          <Col xs="12" className="col-xxl-6 col-xl-6 col-lg-6 col-md-9">
            <ResetForm.Box plXXL="60px">
              <ResetForm.Title as="h2">Reset Password</ResetForm.Title>
              <ResetForm.Text as="p">
                Enter your email to get reset link.
              </ResetForm.Text>
              <ResetForm.FromSection>
                <form action="./">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email"
                      id="floatinginput2"
                    />
                    <label htmlFor="floatinginput2">Your Email</label>
                  </div>

                  <ResetForm.FormButton className="btn-primary mt-2 mb-5">
                    Send Reset Link
                  </ResetForm.FormButton>
                  <ResetForm.FormText>
                    Remember the password?
                    <Link
                      className="btn-link text-electric-violet-2 mtc-2"
                      to="/sign-in"
                    >
                      Sign In now
                    </Link>
                  </ResetForm.FormText>
                </form>
              </ResetForm.FromSection>
            </ResetForm.Box>
          </Col>
        </Row>
      </Container>
    </ResetForm>
  );
}
