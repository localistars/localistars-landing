import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "./style";
import SignupBgImg from "../../../../public/image/accounts/sign-up.jpg";
import { Link } from "~components";
export default function SignUp() {
  return (
    <SignUpForm backgroundColor="#f3f4f6">
      <Container className="position-static">
        <Row className="align-items-center justify-content-center position-static">
          <Col xs="12" className="col-xl-6 col-lg-5 position-static">
            <SignUpForm.Image
              backgroundImage={SignupBgImg.src}
            ></SignUpForm.Image>
          </Col>
          <Col xs="12" className="col-xxl-6 col-xl-6 col-lg-7 col-md-9">
            <SignUpForm.Box plXXL="60px">
              <SignUpForm.Title as="h2">Sign Up to Fastland</SignUpForm.Title>
              <SignUpForm.Text as="p">
                When, while lovely valley teems with vapour around atlas meand
                meridian the upper impenetrable.
              </SignUpForm.Text>
              <SignUpForm.FromSection>
                <form action="./">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name"
                      id="floatinginput1"
                    />
                    <label htmlFor="floatinginput1">Your Name</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email"
                      id="floatinginput2"
                    />
                    <label htmlFor="floatinginput2">Your Email</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Your Password"
                      id="floatinginput3"
                    />
                    <label htmlFor="floatinginput3">Your Password</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Your Password"
                      id="floatinginput4"
                    />
                    <label htmlFor="floatinginput4">
                      Confirm Your Password
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center mt-6 mb-3">
                    <input
                      className="form-check-input bg-white float-none mt-0 mb-0 me-3"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <SignUpForm.FormText>
                      I agree to all the statements included in
                      <Link
                        className="btn-link text-electric-violet-2 ms-2"
                        to="/privarcy"
                      >
                        privacy policy
                      </Link>
                    </SignUpForm.FormText>
                  </div>
                  <SignUpForm.FormButton className="btn-primary mt-2">
                    Sign In
                  </SignUpForm.FormButton>
                </form>
              </SignUpForm.FromSection>
            </SignUpForm.Box>
          </Col>
        </Row>
      </Container>
    </SignUpForm>
  );
}
