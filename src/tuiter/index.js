import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import WhoToFollowList from "./who-to-follow-list";
import ProfileScreen from "./profile-screen";
import BookmarksScreen from "./bookmarks";

function Tuiter() {
  return (
    <div className="row">
      <div className="col-4 col-xs-4 col-sm-4 col-md-2 col-lg-2">
        <NavigationSidebar />
      </div>
      <div className="col-8 col-xs-8 col-sm-8 col-md-7 col-lg-7">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/bookmarks" element={<BookmarksScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
      <div className="col-3 d-none d-md-block">
        <WhoToFollowList />
      </div>
    </div>
  );
}

export default Tuiter;
