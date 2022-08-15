import React, { useState, useEffect } from "react";

const getData = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if (!res.ok) throw new Error("invalid url");
    const data = await res.json();
    return data;
  } catch (error) {
    return { errorMessage: "Error", error };
  }
};

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData();
      if (data.errorMessage) return;
      setPosts(data);
    })();
  }, []);

  return (
    <div>
      {!posts.length && <p>Loading ...</p>}
      <ul>
        {posts.length &&
          posts.map((i) => (
            <li key={i.id}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Async;
