import { useContext } from "react";
import offer from "../../../../public/image/mixed/ads-img.png";
import SideBar from "./style";
import { Link } from "~components";

import SearchContext from "~context/SearchContext";

export default function SideBarSection() {
  const searchContext = useContext(SearchContext);
  const setSearchValue = searchContext.setSearchValue

  return (
    <SideBar>
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Search</SideBar.Title>
        <SideBar.Search>
          <form action="./">
            <i className="fa fa-search" />
            <input type="text" placeholder="Type to search" onChange={(e) => setSearchValue(e.target.value)} />
          </form>
        </SideBar.Search>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Recent Posts</SideBar.Title>
        <SideBar.RecentPost>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                How To Blow Through Capital At An Incredible Rate
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>Jan 14, 2020</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                Design Studios That Everyone Should Know About?
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>Jan 14, 2020</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
          <SideBar.RecentPostList>
            <Link to="#">
              <SideBar.RecentPostTitle>
                How did we get 1M+ visitors in 30 days without anything!
              </SideBar.RecentPostTitle>
              <SideBar.RecentPostDate>Jan 14, 2020</SideBar.RecentPostDate>
            </Link>
          </SideBar.RecentPostList>
        </SideBar.RecentPost>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>Recent Tweets</SideBar.Title>
        <SideBar.Twitter>
          <SideBar.TwitterList>
            <Link to="#">
              <SideBar.TwitterUser as="span">@Smith,</SideBar.TwitterUser> the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure
            </Link>
          </SideBar.TwitterList>
          <SideBar.TwitterList>
            <Link to="#">
              <SideBar.TwitterUser as="span">@Maurice,</SideBar.TwitterUser> the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure
            </Link>
          </SideBar.TwitterList>
          <SideBar.TwitterList>
            <Link to="#">
              <SideBar.TwitterUser as="span">@Stella,</SideBar.TwitterUser> the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure
            </Link>
          </SideBar.TwitterList>
          <SideBar.TwitterList>
            <Link to="#">
              <SideBar.TwitterUser as="span">@Howard,</SideBar.TwitterUser> the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure
            </Link>
          </SideBar.TwitterList>
        </SideBar.Twitter>
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
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
      <SideBar.Ads mb="50px" mbLG="0">
        <Link to="#">
          <img src={offer.src} alt="content" className="w-100"/>
        </Link>
      </SideBar.Ads>
      {/*/ .Single Widgets */}
    </SideBar>
  );
}
