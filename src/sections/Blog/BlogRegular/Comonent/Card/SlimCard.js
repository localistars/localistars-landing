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
  author,
  alt
}) {
  return (
    <Card>
      <Card.Image>
        <Link href={`/blog/${slug}`}>
          <a alt="Blog">
            <img src={`${prefix}${thumbnail}`} alt={alt} loading="lazy" />
          </a>
        </Link>
      </Card.Image>
      <Card.OverlayBlock>
        <Card.Title to={`/blog/${slug}`}>
          {' '}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Top mb="20px">
          <Card.Date>{date}</Card.Date>
          {!!author && (
            <Card.User>
              <i className="far fa-user"></i> <SuperTag value={author} />
            </Card.User>
          )}
        </Card.Top>

        <Card.Bottom></Card.Bottom>
      </Card.OverlayBlock>
    </Card>
  );
}
