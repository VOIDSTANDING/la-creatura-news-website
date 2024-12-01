import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PostPage = async ({ params }: {params:any}) => {
  const post = await prisma.post.findUnique({ where: { id: Number(params.id) } });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-page">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.createdAt.toDateString()}</p>
      <a href={post.link} className="post-link" target="_blank" rel="noopener noreferrer">Открыть оригинал в новой вкладке</a>
    </div>
  );
};

export default PostPage;