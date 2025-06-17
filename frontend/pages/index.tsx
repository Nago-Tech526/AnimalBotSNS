import React from 'react';
import Post from '../components/Post';

const posts = [
  {
    id: 1,
    avatarUrl: 'https://placekitten.com/80/80',
    displayName: 'Cat Lover',
    username: 'catlover',
    content: 'Look at this cute kitten! 😺',
    timestamp: '1h',
  },
  {
    id: 2,
    avatarUrl: 'https://placebear.com/80/80',
    displayName: 'Bear Fan',
    username: 'bearfan',
    content: 'Bears are awesome!',
    timestamp: '2h',
  },
  {
    id: 3,
    avatarUrl: 'https://placekitten.com/81/81',
    displayName: 'Another Cat',
    username: 'anothercat',
    content: 'Sleeping all day...',
    timestamp: '3h',
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #e1e8ed', borderRadius: '4px' }}>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
