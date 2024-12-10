import { Suspense, lazy } from "react";
import "./listpage.scss";
import Filter from "../../Components/filter/Filter";
import { useLoaderData } from "react-router-dom";

// Lazy load the components
const MyMap = lazy(() => import("../../Components/Map/MyMap"));
const Newlist = lazy(() => import("../../Components/List/Newlist"));

function ListPage() {
  const { postResponse } = useLoaderData();
  const posts = postResponse || [];
  console.log(posts, "Fetched Posts");

  return (
    <div className="listPage">
      <div className="listContainer">
        {/* Map Section */}
        <div className="mapContainer">
          <Suspense fallback={<p>Loading map...</p>}>
            <MyMap items={posts} />
          </Suspense>
        </div>
        {/* Filter Section */}
        <div className="wrapper">
          <Filter posts={posts} />
        </div>

        {/* Posts List Section */}
        <div className="postsContainer">
          <Suspense fallback={<p>Loading posts...</p>}>
            {posts.length > 0 ? (
              <Newlist items={posts} />
            ) : (
              <p>No posts available</p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
