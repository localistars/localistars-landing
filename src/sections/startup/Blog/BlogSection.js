import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Blog from './style'
 import BlogCard from './Comonent/Card'
 import BlogData from '~data/startup/Blog'
export default function BlogSection(){
return(
<Blog>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-8 text-center">
        <Blog.Box mb="63px">
          <Blog.Subtitle as="h6" fontColor="#5034fc">Blog</Blog.Subtitle>
          <Blog.Title as="h2">Latest Posts</Blog.Title>
        </Blog.Box>
      </Col>
    </Row>
      <Row className="justify-content-center">
      {BlogData.map(({image, badge, date, title, user, commentCount},index)=>{
        return(
             <Col xs="12" className="col-lg-4 col-md-6 col-xs-9" key={"bsp" + index}>
              <BlogCard
                image={image}
                badge={badge}
                date={date}
                title={title}
                user={user}
                commentCount={commentCount}
                />
            </Col>
          )
        })}
      </Row>
  </Container>
</Blog>

)
}