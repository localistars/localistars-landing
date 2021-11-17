import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components';
import Table from './style'
import SectionTitle from './Components/SectionTitle'
import prefix from '~lib/prefix';

const bg2 = {

    bg2: "bg-athens-gray"

};

export default function AboutSection(){
return(
<Table>
  <Container>
    {/*/ 1st Row start */}
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray">
      <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Create a project and call for bids"
            text="Create a new draft. Upload the files you need to be translated. Choose the target languages for the translation and call for bids. Done. Behind the scenes a translation project has been created. You can relax and wait for bids to show up."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/draft.jpg`} alt="draft" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
        
      </Col>
      <Col col="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse">
      </Col>
    </Row>
    {/*/ 1st Row end */}

    {/*/ 2nd Row start */}
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray">
      
        
      </Col>
      <Col xs="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse">
        <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Make an offer"
            text="The new project shows up in your list of new job opportunities. You can bid based on the content and metrics provided. If there's something unclear or you need additional details, you can reach out to the potential client anytime."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/start_bid.jpg`} alt="start bid" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>
    </Row>
    {/*/ 2nd Row end */}

  {/*/ 3rd Row start */}
    <Row className="align-items-center justify-content-center">
    <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray">
      <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Choose the right partner for your project"
            text="Choose the offer with the lowest price or the partner with the best reputation. The choice is yours. The new partner will be added to your list of translators, so in future it's easy for you to work with the same people again."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/choose_bid.jpg`} alt="choose bid" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>
      <Col col="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse">
      </Col>
      
    </Row>
    {/*/ 3rd Row end */}

  {/*/ 4th Row start */}
    <Row className="align-items-center justify-content-center">
    <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 mt-7 bg-athens-gray">
        <Table.Content mt="50px" mtLG="1" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Fund the project"
            text="Before the translator may start working you'll need to fund the project. We hold back the money until you approve the provided translations. The translator can be sure the costs are covered while you can be sure to only be charged if you approve the content."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/accounting.jpg`} alt="accounting" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>
      <Col col="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 mt-7 bg-gorse">
      </Col>
      
    </Row>
    {/*/ 4th Row end */}

  {/*/ 5th Row start */}
    <Row className="align-items-center justify-content-center">
    
      <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 bg-athens-gray">
      
        
      </Col>

        <Col xs="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse">
        <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Get down to business"
            text="Do what you're best at. When the translations are done, upload the files and submit the job. During the project you can reach out to your client at anytime."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/upload_files.jpg`} alt="start bid" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>
      
    </Row>
    {/*/ 5th Row end */}

    {/*/ 6th Row start */}
    <Row className="align-items-center justify-content-center">
    
      <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 border bg-athens-gray">
        <Table.Content mt="50px" mtLG="1" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Approve the work"
            text="If you're happy with the work of your translator you approve the project.

If there's something missing or in need of rework, give the translator a chance to improve the content. For disputes we introduced a special workflow as well."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/paid_project.jpg`} alt="paid_project" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>

      <Col col="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 bg-gorse">
      </Col>
      
    </Row>
    
    {/*/ 6th Row end */}

    {/*/ 7th Row start */}
    <Row className="align-items-stretch justify-content-center">
    
      <Col xs="12" className="col-xl-4 col-lg-6 col-md-8 col-xs-10 mt-7 bg-athens-gray">
        <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Be charged"
            text="With approval of the project the provided funding will be paid out to the translator. You will get an invoice for your accounting. All past transactions can be viewed in the accounting section of your organisation."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/transactions.jpg`} alt="transactions" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>

      <Col xs="12" className="col-xxl-4 offset-xxl-1 col-lg-5 col-md-8 col-xs-10 mt-7 bg-gorse">
      <Table.Content mt="0px" mtLG="0" mb="50px" mbLG="0" mlLG="30px">
          <SectionTitle 
            
            title="Get paid"
            text="Time to get paid. The money will be transferred to your localistars-balance and can be withdrawn at any time. All necessary reports for your accounting (invoices, VAT-reports, etc.) are available in your organisation section."
            titleProps={{mb:"15px"}}
            subTitleProps={{mb:"5px"}}
            />
            <Table.HIWimage>
            <img src={`${prefix}/image/howitworks/payout.jpg`} alt="payout" className="w-100"/>
          </Table.HIWimage>
          
        </Table.Content>
      </Col>
      
    </Row>
    {/*/ 7th Row end */}


  </Container>
</Table>

)
}
