import React from 'react'
import { Accordion} from "react-bootstrap";
import { SuperTag } from '../Core';
import AccordionTrigger from './AccordionTriggerFull';

const AccordionItem = ({question,answer,accKey})=>{
    return(
        <AccordionTrigger className="accordion-item" eventKey={accKey}>
            <span variant="link"  className="accordion-trigger text-start">
                {question}
            </span>
            <Accordion.Collapse eventKey={accKey}>
                <p>
                {answer}
                </p>
            </Accordion.Collapse>
        </AccordionTrigger>
    )
}

export default AccordionItem;