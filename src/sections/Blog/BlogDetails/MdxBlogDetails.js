import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '~components';
import Details from './style';
import Image from 'next/image';
import Sidebar from '~sections/Common/Sidebar';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import StructureData from '~sections/Blog/BlogDetails/StructureData';
import Head from 'next/head';
import {
  BlogQoute,
  CommentsBoxSection,
  CommentsFormSection
} from './Component';

export default function MdxBlogDetails({
  allPosts,
  mdxComponent,
  title,
  date,
  image,
  alt,
  category,
  modified,
  readingTime
}) {
  const router = useRouter();
  const site = 'https://localistars.com';
  const currentURL = site + router.asPath;
  const blogURL = '/blog';
  const twittershare =
    'https://twitter.com/intent/tweet?url=' + currentURL + '&text=';

  const { t } = useTranslation('translations');
  const minutes = readingTime.minutes;
  const readtime = minutes.toFixed(0) + 'min';

  return (
    <Details backgroundColor="#f9fafc">
      <Head>
        <StructureData
          headline={title}
          img={image}
          date={date}
          modified={modified}
        />
      </Head>

      <Details.Box pb="60px" pbMD="80px" pbLG="130px">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-lg-7">
              <Details.Box mb="30px" mbLG="55px">
                <Details.Title as="h1">{title}</Details.Title>
                <Details.MetaInfo>
                  <Details.Text>{date}</Details.Text>

                  <Details.Text>
                    {readtime} {t('blog.readTime')}
                  </Details.Text>

                  <Details.Text>
                    <Link href={blogURL}>
                      <a alt="Blog">{t('blog.smallTitle')}</a>
                    </Link>{' '}
                    /{' '}
                    <Link href={blogURL}>
                      <a alt="{title}">{title}</a>
                    </Link>
                  </Details.Text>
                </Details.MetaInfo>
              </Details.Box>

              <Details.Box mb="30px" mbLG="55px">
                <Details.Image>
                  <img src={image} alt={alt} />
                </Details.Image>
              </Details.Box>

              <Details.Box>
                {mdxComponent}

                <Details.Tag mt="30px">
                  <Details.SubTitle mr="25px" as="h4">
                    {t('blog.share')}:
                  </Details.SubTitle>
                  <Details.SocialList>
                    <li>
                      <Link to={twittershare} target="_blank">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>

                    {/*
                    <li>
                      <Link to={linkshare} target="_blank">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link to={fbshare} target="_blank">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    
                    <li>
                      <Link to={pinshare} target="_blank">
                        <i className="fab fa-pinterest" />
                      </Link>
                    </li>*/}
                  </Details.SocialList>
                </Details.Tag>

                {/*
                <Details.Pagination mt="30px" mtLG="75px" mb="50px">
                  <Details.PrevButton>
                    <Link className="btn-link" to="/">
                      <i className="fa fa-arrow-left" />
                      prev
                    </Link>
                  </Details.PrevButton>
                  <Details.NextButton>
                    <Link className="btn-link" to="/">
                      next
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </Details.NextButton>
                </Details.Pagination>*/}
              </Details.Box>
            </Col>
            <Col xs="12" className="col-xl-4 offset-xl-1 col-lg-5">
              <Sidebar allPosts={allPosts} />
            </Col>
          </Row>
        </Container>
      </Details.Box>
    </Details>
  );
}
