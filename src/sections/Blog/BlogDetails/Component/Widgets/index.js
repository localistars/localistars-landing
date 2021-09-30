import React from 'react'
import { Link } from '~components'
import Widgets  from './style'
export default function CommentsWidgets({UserName,UserImage, ...rest}){
  return(
    <Widgets>
      <Widgets.MetaBox className="comment-meta-box d-flex">
        <Widgets.Image>
          <img src={UserImage} alt="user"/>
        </Widgets.Image>
        <Widgets.Content>
          <Widgets.UserInfo>
            <Widgets.MetaDetails>
              <Widgets.UserName><Link to="/">{UserName}</Link></Widgets.UserName>
              <Widgets.Box className="d-flex">
                <Widgets.Date to="/">Jan 20, 2021 </Widgets.Date>|
                <Widgets.Time to="/"> 24 minutes ago</Widgets.Time>
              </Widgets.Box>
            </Widgets.MetaDetails>
            <Widgets.Reply as={Link} to="/"><i className="fa fa-reply" /> Reply</Widgets.Reply>
          </Widgets.UserInfo>
          <Widgets.Text>OMG! I cannot believe that I have got a brand
            new landing page after getting
            Fastland. It
            was super easy to create, edit and publish.</Widgets.Text>
        </Widgets.Content>
      </Widgets.MetaBox>
    </Widgets>
)
}