import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Form } from '~components'
import Search from './style'
export default function SearchSection(){
return(
<Search>
  <Container>
    <Row className="justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-md-10 text-center">
        <Search.Box>
          <Search.Title as="h2" fontColor="#fff">
            How can we help you?
          </Search.Title>
          <Search.Newsletter>
            <Form>
              <input type="text" placeholder="Type keywords to find answers" />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </Form>
          </Search.Newsletter>
          <Search.Text fontColor="rgba(255,255,255, 0.7);">
            You can also browse the topics below to find what you are looking for
          </Search.Text>
        </Search.Box>
      </div>
    </Row>
  </Container>
</Search>

)
}