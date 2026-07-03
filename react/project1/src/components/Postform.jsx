import { useState } from "react";

function PostForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAdd = () => {
    if (!title || !body) return;

    addPost(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h3>Add Post</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default PostForm;