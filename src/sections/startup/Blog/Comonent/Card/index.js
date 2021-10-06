import React from "react";
import { SuperTag } from "~components";
import Card from "./style";
export default function BlogCard({
  text,
  title,
  date,
  user,
  commentCount,
  badge,
  image,
  ...rest
}) {
  return (
    <Card>
      <Card.Image>
        <img src={image} alt="Blog" className="w-100"/>
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.Badge backgroundColor="#fcdc00 ">{badge}</Card.Badge>
          <Card.Date to="/innerpage/blog/blogs-details">{date}</Card.Date>
        </Card.Top>
        <Card.Title to="/blog/blogs-details">
          {" "}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Bottom>
          <Card.User to="/blog/blogs-details">{user}</Card.User>
          <Card.Comment to="/blog/blogs-details">
            {commentCount} Comments
          </Card.Comment>
        </Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  );
}
