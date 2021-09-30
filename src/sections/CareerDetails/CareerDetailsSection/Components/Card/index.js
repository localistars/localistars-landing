
import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function CareerCard({icon,title, text,to,iconBackground,...rest}){
return(
<Card>
  <Card.Box>
    <Card.Title fontColor="#262729">Product Manager</Card.Title>
    <Card.List>
      <Card.ListItem><Link to='/href'><i className="fa fa-map-marker-alt text-electric-violet-2" /> Remote</Link></Card.ListItem>
      <Card.ListItem><Link to='/href'><i className="fa fa-briefcase text-electric-violet-2" /> Full-time</Link></Card.ListItem>
      <Card.ListItem><Link to='/href'><i className="fa fa-clock text-electric-violet-2" /> Posted 8 hours ago</Link></Card.ListItem>
    </Card.List>
  </Card.Box>
<Card.ButtonGroup>
  <Card.Button mb="10px" className="btn btn-primary text-white box-shadow" as={Link} to="/">Apply</Card.Button>
  <Card.Button  className="btn btn-outline-primary hover-white" as={Link} to="/">Share</Card.Button>
</Card.ButtonGroup>

</Card>
)
}