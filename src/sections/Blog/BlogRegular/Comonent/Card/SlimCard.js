import React from 'react';
import { SuperTag } from '~components';
import Card from './style';
import { Link } from '~components';
import BlogsImg7 from '~image/blogs/blog-post-7.png';
import prefix from '~lib/prefix';

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
        <Link href={`/blog/${slug}`}>
          <a alt="Blog">
            <img src={`${prefix}${thumbnail}`} alt={alt} />
          </a>
        </Link>
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Title to={`/blog/${slug}`}>
          {' '}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Top mb="20px">
          <Card.Date>{date}</Card.Date>
        </Card.Top>

        <Card.Bottom></Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  );
}
