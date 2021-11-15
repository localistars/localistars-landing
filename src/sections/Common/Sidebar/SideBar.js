import React from "react";
import { useContext } from "react";
// import Image from "next/image";
import offerImage from "../../../../public/image/mixed/ads-img.png";
import SideBar from "./style";
import { Link } from "~components";
import SearchContext from "~context/SearchContext";

export default function SideBarSection({ posts = [], frontMatter }) {
const searchContext = useContext(SearchContext);
const searchValue = searchContext.searchValue

const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((frontMatter) =>
      (frontMatter.title || frontMatter.name).toLowerCase().includes(searchValue.toLowerCase())
    );



  return (
    <SideBar>
      
      {/* Single Widgets */}
      <SideBar.Widgets>

      <SideBar.Title>Recent Posts</SideBar.Title>

      {!filteredBlogPosts.length && 
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No posts found.
            </p>
          }

      { filteredBlogPosts.map((post, index) => (

            <SideBar.RecentPost>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                { post.title }
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>{ post.date }</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
            
          
        </SideBar.RecentPost>
         ))}
           
   
        
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
      
    </SideBar>
  );
}
