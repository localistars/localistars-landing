import React from "react";
import { useContext } from "react";
// import Image from "next/image";
import offerImage from "../../../../public/image/mixed/ads-img.png";
import SideBar from "./style";
import { Link } from "~components";
import SearchContext from "~context/SearchContext";

export default function SideBarSection({ allPosts }) {


  return (
    <SideBar>
      
      {/* Single Widgets */}
      <SideBar.Widgets>

      <SideBar.Title>Recent Posts</SideBar.Title>

      {!allPosts.length && 
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No posts found.
            </p>
          }

      { allPosts.map((post, index) => (

            <SideBar.RecentPost>
          <SideBar.RecentPostList>
           
            <Link key={index} to={`/blog/${post.slug}`}>
              <SideBar.RecentPostTitle>
                { post.title }
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>{ post.date }</SideBar.RecentPostDate>
            </Link>
             <hr />
          </SideBar.RecentPostList>
            
          
        </SideBar.RecentPost>
          ))}
           
   
        
      </SideBar.Widgets>
      {/*/ Single Widgets */}
      
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Categories</SideBar.Title>

        { allPosts.map((post, index) => (


        <SideBar.CateGory>
          <SideBar.CateGorySingle>


          


            <Link to="#">
              <SideBar.CateGoryTitle>{post.category}</SideBar.CateGoryTitle>
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

              ))}

       

      </SideBar.Widgets>
      {/*/ .Single Widgets */}


      
    </SideBar>
  );
}
