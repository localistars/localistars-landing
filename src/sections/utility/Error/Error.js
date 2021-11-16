import React from "react";
import { Link } from "~components";
import { Col, Container, Row } from "react-bootstrap";
import ErrorPage from "./style";
import errorImage from "../../../../public/image/logo/logo-black.png";
import { useTranslation } from 'next-i18next'

export default function Error() {
const { t } = useTranslation('translations')

  return (
    <ErrorPage backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-7 col-md-8 col-xs-10">
            <ErrorPage.Image className="error-page__image text-center">
              <img src={errorImage.src} alt />
            </ErrorPage.Image>
            <ErrorPage.BigTitle as="h1">404</ErrorPage.BigTitle>
            <ErrorPage.Title>{t('errortitle')}</ErrorPage.Title>
            <ErrorPage.Text>
             {t('errortext')}
            </ErrorPage.Text>
            <ErrorPage.ButtonGroup>
              <ErrorPage.Button className="btn-1" to="/" as={Link}>
                {t('errorbtn')}
              </ErrorPage.Button>
              <ErrorPage.Button as={Link}
                className="btn-2"
                href="/translator"
              >
                {t('errorbtnsec')}
              </ErrorPage.Button>
            </ErrorPage.ButtonGroup>
          </Col>
        </Row>
      </Container>
    </ErrorPage>
  );
}
