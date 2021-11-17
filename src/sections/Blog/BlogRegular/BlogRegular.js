import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getStaticProps, GetStaticPaths } from "next";
import Blog from "./style";
import BlogCard from "./Comonent/Card";
import SlimBlogCard from "./Comonent/Card/SlimCard";
import SearchContext from "~context/SearchContext";
import { useTranslation } from 'next-i18next'

export default function BlogRegular({ posts = [] }) {

  const searchContext = useContext(SearchContext);
  const searchValue = searchContext.searchValue

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((frontMatter) =>
      (frontMatter.title || frontMatter.name).toLowerCase().includes(searchValue.toLowerCase())
    );

  const { t } = useTranslation('translations')

    console.log(filteredBlogPosts)

  return (
    <Blog backgroundColor="#f9fafc">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-8 text-center">
            <Blog.Box mb="63px">
              <Blog.Subtitle as="h6" fontColor="#5034fc">
                {t('blogTitle')}
              </Blog.Subtitle>
              <Blog.Title as="h2">Localistars Blog</Blog.Title>
            </Blog.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          
          {!filteredBlogPosts.length && 
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('blogNotFound')}.
            </p>
          }
          {filteredBlogPosts.map((info, index) => (
            <Col
              xs="12"
              className="col-lg-4 col-md-6 col-xs-9"
              key={"bsp" + index}
              
            >
              <SlimBlogCard {...info} />
            </Col>
          ))}
          
        </Row>

      </Container>
    </Blog>
  );
}

