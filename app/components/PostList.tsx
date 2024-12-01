import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  createdAt: string;
}

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-4 p-4">
          <div className="flex justify-between items-center">
            <Link href={`/posts/${post.id}`} className="link">
              {post.title}
            </Link>
            <span className="text-gray-900 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
