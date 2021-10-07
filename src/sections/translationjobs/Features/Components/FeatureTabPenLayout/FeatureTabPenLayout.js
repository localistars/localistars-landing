import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { SuperTag } from '~components';
 import {TabTitle} from "./style"
export default function FeatureTabPenLayout({imageBlock,contentBlockTitle,contentBlock}){
return(
<Row className="row align-items-center justify-content-center">
    <Col xs="12" className="col-xl-6 col-lg-6 col-md-5 col-xs-10">
        {imageBlock}
    </Col>
    <Col xs="12" className="col-xl-5 col-lg-6 col-md-7 col-xs-10">
        
      <div className="feature-area--l2__content">
          {contentBlockTitle ? <TabTitle as="h2" fontColor="#fff" mb="40px" weight="500"><SuperTag value={contentBlockTitle}/></TabTitle> : null}
          {contentBlock}
          
      </div>
    </Col>
  </Row>
)
}




