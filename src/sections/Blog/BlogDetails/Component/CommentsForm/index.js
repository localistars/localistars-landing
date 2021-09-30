import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommentsForm  from './style'
export default function CommentsFormSection({text, ...rest}){
  return(
    <CommentsForm>
      <CommentsForm.Title>Share your response</CommentsForm.Title>
      <form action="./" className="contact-form">
        <Row>
          <Col xs="12" className="col-lg-6 mb-4">
            <CommentsForm.Box className="form-floating">
              <input className="form-control" placeholder="Leave a comment here" id="floatinginput" />
              <label htmlFor="floatinginput">Your Name</label>
            </CommentsForm.Box>
          </Col>
          <Col xs="12" className="col-lg-6 mb-4">
            <CommentsForm.Box  className="form-floating">
              <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" />
              <label htmlFor="floatinginput2">Your Email</label>
            </CommentsForm.Box>
          </Col>
          <Col xs="12" className="col-lg-12">
            <CommentsForm.Box  className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea3" style={{height: 100}} defaultValue={""} />
              <label htmlFor="floatingTextarea3">Type your comment.. </label>
            </CommentsForm.Box>
          </Col>
          <Col xs="12" className="col-lg-12">
            <CommentsForm.Box mt="45px" mb="40px" className="form-check d-flex align-items-center">
              <input className="form-check-input bg-white float-none mt-0" type="checkbox" defaultValue id="flexCheckDefault" />
              <CommentsForm.LableText className="form-check-label" htmlFor="flexCheckDefault">
                Save my name, email, and website in this browser for the next time I comment.
              </CommentsForm.LableText>
            </CommentsForm.Box>
            <CommentsForm.Button className="btn btn-primary shadow--primary-4 btn--lg-2 rounded-55 text-white">Send
              Message</CommentsForm.Button>
          </Col>
        </Row>
      </form>

    </CommentsForm>
)
}