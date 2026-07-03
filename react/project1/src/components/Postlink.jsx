import PostCard from "./PostCard";

function PostList({ data, deletePost }) {
  return (
    <div>
      {data.slice(0, 10).map((item) => (
        <PostCard key={item.id} item={item} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default PostList;