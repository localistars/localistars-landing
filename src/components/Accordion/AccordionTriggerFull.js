

import React,{useContext} from 'react'
import {useAccordionToggle,AccordionContext} from 'react-bootstrap'


export default function AccordionTrigger({className, children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <div
        className={`${className} ${isCurrentEventKey ? 'active' : ''}`}
        onClick={decoratedOnClick}
        onKeyDown={decoratedOnClick}
        role="button"
        tabIndex={isCurrentEventKey ? 1 : 0}
      >
        {children}
      </div>
    );
  }


