import React from "react";
import { SuperTag } from "~components";
import Card from "./style";
import BlogsImg7 from "~image/blogs/blog-post-7.png";

export default function SlimBlogCard({
  title,
  date,
  category,
  slug,
  locale, 
  thumbnail,
  alt
}) {
  return (
    <Card>
      <Card.Image>
        <img src={thumbnail} alt={alt} />
      </Card.Image>
      <Card.OvaerlayBlock>
      <Card.Title to={`/blog/${slug}`}>
          {" "}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Top mb="20px">
          <Card.Date to={`/blog/${slug}`}>{date}</Card.Date>
          <Card.Summary to={`/blog/${slug}`}>
            Details
          </Card.Summary>
        </Card.Top>
        
        <Card.Bottom>
          
        </Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  );
}
