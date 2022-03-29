import React from 'react';
import { SuperTag } from '~components';
import Card from './style';
import BlogsImg7 from '~image/blogs/blog-post-7.png';

export default function SlimBlogCard({ title, date, summary, slug, locale }) {
  return (
    <Card>
      <Card.Image>
        <img src={BlogsImg7.src} alt="Blog" loading="lazy" />
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.Date to={`/blog/${slug}`}>{date}</Card.Date>
        </Card.Top>
        <Card.Title to={`/blog/${slug}`}>
          {' '}
          <SuperTag value={title} />
        </Card.Title>
        <Card.Bottom>
          <Card.Summary to={`/blog/${slug}`}>
            <SuperTag value={summary} />
          </Card.Summary>
        </Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  );
}
