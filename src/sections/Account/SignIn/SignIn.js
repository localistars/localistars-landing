import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "./style";
import SigninBgImg from "~image/accounts/sign-in.jpg";
export default function SignIn() {
  return (
    <SignInForm backgroundColor="#f3f4f6">
      <Container className="position-static">
        <Row className="align-items-center justify-content-center position-static">
          <Col xs="12" className="col-xl-6 col-lg-5 position-static">
            <SignInForm.Image
              backgroundImage={SigninBgImg.src}
            ></SignInForm.Image>
          </Col>
          <Col
            xs="12"
            className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-10"
          >
            <SignInForm.Box>
              <SignInForm.Title as="h2">
                Sign In to your Account
              </SignInForm.Title>
              <SignInForm.Text as="p">
                Enter your account details below to log in.
              </SignInForm.Text>
              <SignInForm.FromSection>
                <form action="./">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Leave a comment here"
                      id="floatinginput"
                    />
                    <label htmlFor="floatinginput">Your Email</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Leave a comment here"
                      id="floatinginput2"
                    />
                    <label htmlFor="floatinginput2">Your Password</label>
                  </div>
                  <div className="form-check d-flex align-items-center mt-6 mb-3">
                    <input
                      className="form-check-input bg-white float-none mt-0 mb-0 me-3"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <SignInForm.FormText htmlFor="flexCheckDefault">
                      Remember me
                    </SignInForm.FormText>
                  </div>
                  <SignInForm.FormButton className="btn-primary mt-2">
                    Sign In
                  </SignInForm.FormButton>
                </form>
                <div className="buttons mt-6">
                  <SignInForm.FormText>
                    Don’t have an account?
                    <a
                      className="btn-link text-electric-violet-2 ms-2"
                      href="/sign-up.html"
                    >
                      Create a free account"
                    </a>
                  </SignInForm.FormText>
                </div>
              </SignInForm.FromSection>
            </SignInForm.Box>
          </Col>
        </Row>
      </Container>
    </SignInForm>
  );
}
