import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCardTwo({title, text,to,iconBackground,...rest}){
return(
  <Card as={Link} to="/">
          <Card.Title as="h2">+4 More</Card.Title>
            <Card.Body>
                <Card.Text as="p">50 availabe vacancy</Card.Text>
                <Card.Button><i className="fa fa-chevron-right" /></Card.Button>
              </Card.Body>
        </Card>
)
}