"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, link }),
    });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" className="form-input" required />
      <input type="url" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Ссылка на новость" className="form-input" required />
      <div className="button-container">
        <button type="submit" className="submit-button">Отправить</button>
      </div>
    </form>
  );
};

export default PostForm;
