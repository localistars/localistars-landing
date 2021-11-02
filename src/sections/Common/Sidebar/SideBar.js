import React from "react";
// import Image from "next/image";
import offerImage from "../../../../public/image/mixed/ads-img.png";
import SideBar from "./style";
import { Link } from "~components";


export default function SideBarSection( { mdxComponent, title, date, image, alt, category }) {


  return (
    <SideBar>
      
      {/* Single Widgets */}
      <SideBar.Widgets>

      <SideBar.Title>Recent Posts</SideBar.Title>

      {/*}
          {posts.map((info, index) => (

            <SideBar.RecentPost key={"bsp" + index}>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                { title }
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>{ date }</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
          
          
        </SideBar.RecentPost>
           


          ))}
    */}
        
      </SideBar.Widgets>
      {/*/ Single Widgets */}
      
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Categories</SideBar.Title>
        <SideBar.CateGory>
          <SideBar.CateGorySingle>
            <Link to="#">
              <SideBar.CateGoryTitle>Technology:</SideBar.CateGoryTitle>
              <SideBar.CateGoryCount as="span">20 posts</SideBar.CateGoryCount>
            </Link>
          </SideBar.CateGorySingle>
          <SideBar.CateGorySingle>
            <Link to="#">
              <SideBar.CateGoryTitle>Freelancing:</SideBar.CateGoryTitle>
              <SideBar.CateGoryCount as="span">07 posts</SideBar.CateGoryCount>
            </Link>
          </SideBar.CateGorySingle>
          <SideBar.CateGorySingle>
            <Link to="#">
              <SideBar.CateGoryTitle>Writing:</SideBar.CateGoryTitle>
              <SideBar.CateGoryCount as="span">16 posts</SideBar.CateGoryCount>
            </Link>
          </SideBar.CateGorySingle>
          <SideBar.CateGorySingle>
            <Link to="#">
              <SideBar.CateGoryTitle>Marketing:</SideBar.CateGoryTitle>
              <SideBar.CateGoryCount as="span">11 posts</SideBar.CateGoryCount>
            </Link>
          </SideBar.CateGorySingle>
          <SideBar.CateGorySingle>
            <Link to="#">
              <SideBar.CateGoryTitle>Business:</SideBar.CateGoryTitle>
              <SideBar.CateGoryCount as="span">35 posts</SideBar.CateGoryCount>
            </Link>
          </SideBar.CateGorySingle>
          <SideBar.CateGorySingle>
            <Link to="#">
              <SideBar.CateGoryTitle>Education:</SideBar.CateGoryTitle>
              <SideBar.CateGoryCount as="span">14 posts</SideBar.CateGoryCount>
            </Link>
          </SideBar.CateGorySingle>
        </SideBar.CateGory>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Ads>
        <Link to="#">
          <img src={offerImage.src} alt="content" className="w-100" />
        </Link>
      </SideBar.Ads>
      {/*/ .Single Widgets */}
    </SideBar>
  );
}

