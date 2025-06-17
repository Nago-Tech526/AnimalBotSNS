import React, { useEffect, useState } from 'react';
import Post from '../components/Post';

interface PostData {
  id: number;
  avatarUrl: string;
  displayName: string;
  username: string;
  content: string;
  timestamp: string;
}

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('http://localhost:8000/posts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #e1e8ed', borderRadius: '4px' }}>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
