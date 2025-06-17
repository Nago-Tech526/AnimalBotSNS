import React from 'react';

interface PostProps {
  avatarUrl: string;
  displayName: string;
  username: string;
  content: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ avatarUrl, displayName, username, content, timestamp }) => {
  return (
    <div style={{ display: 'flex', padding: '10px', borderBottom: '1px solid #e1e8ed' }}>
      <img src={avatarUrl} alt={displayName} style={{ width: '48px', height: '48px', borderRadius: '50%', marginRight: '10px' }} />
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: '5px' }}>
          <strong>{displayName}</strong> <span style={{ color: '#657786' }}>@{username}</span> · <span style={{ color: '#657786' }}>{timestamp}</span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Post;
