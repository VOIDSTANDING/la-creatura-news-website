"use client"

import { useEffect, useState } from 'react';
import PostList from './components/PostList';

interface Post {
  id: number;
  title: string;
  createdAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="add-post-title">Новости. От тебя, для тебя</h1>
      <PostList posts={posts} />
    </div>
  );
}
