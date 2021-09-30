import React from 'react'
import { Accordion} from "react-bootstrap";
import AccordionTrigger from './AccordionTrigger';

const AccordionItem = ({question,answer,accKey})=>{
    return(
        <div className="accordion-item">
            <AccordionTrigger variant="link" eventKey={accKey} className="accordion-trigger btn-reset text-start">
                {question}
            </AccordionTrigger>
            <Accordion.Collapse eventKey={accKey}>
                <p>
                {answer}
                </p>
            </Accordion.Collapse>
        </div>
    )
}

export default AccordionItem;