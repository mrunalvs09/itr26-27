function PostCard({ item, deletePost }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h4>{item.title}</h4>
      <p>{item.body}</p>

      <button onClick={() => deletePost(item.id)}>Delete</button>
    </div>
  );
}

export default PostCard;