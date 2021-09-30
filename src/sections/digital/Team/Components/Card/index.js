import React from "react"
import Card from "./style"
export default function TeamCard({image,userName,userPosition,...rest}) {
  return (
    <>
      <Card {...rest}>
        <img
          className="w-100"
          src={image}
          alt="testimonial"
        />
        <Card.InnerBlock>
          <div>
            <Card.Title fontColor="#fff">{userName}</Card.Title>
            <Card.Text className="card__user-media__cat" fontColor="#fff">
              {userPosition}
            </Card.Text>
            <Card.Social>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-instagram" />
              </Card.SocialItem>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-linkedin" />
              </Card.SocialItem>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-facebook" />
              </Card.SocialItem>
              <Card.SocialItem as="a" href="href://instagram.com" tabIndex={0}>
                <i className="fab fa-twitter" />
              </Card.SocialItem>
            </Card.Social>
          </div>
        </Card.InnerBlock>
      </Card>
    </>
  )
}
