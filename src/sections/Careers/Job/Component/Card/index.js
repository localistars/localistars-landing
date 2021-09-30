import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({title,address,hours,time,salary,...rest}){
return(
<Card backgrounColor="#fff">
  <Card.Title fontColor="#262729">{title}</Card.Title>
  <Card.Listwrapper>
    <Card.List fontColor="#262729b3"><i className="fa fa-map-marker-alt text-electric-violet-2" />{address}
    </Card.List>
    <Card.List fontColor="#262729b3"><i className="fa fa-clock text-electric-violet-2" /> {hours}</Card.List>
    <Card.List fontColor="#262729b3"><i className="fa fa-briefcase text-electric-violet-2" />{time}</Card.List>
    <Card.List fontColor="#262729b3"><i className="fa fa-briefcase text-electric-violet-2" />{salary}</Card.List>
  </Card.Listwrapper>
  <Card.Button>Apply</Card.Button>
</Card>

)
}