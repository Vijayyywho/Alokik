import "./List.scss";
import Card from "../Card/Card";

function List({ posts }) {
  if (!posts) {
    return <div>Loading...</div>; // Show loading state if posts are not available yet
  }

  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
