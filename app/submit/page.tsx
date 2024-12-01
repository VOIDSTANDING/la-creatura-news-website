import PostForm from '../components/PostForm';

export default function AddPost() {
  return (
    <div className="container">
      <h1 className="add-post-title">Добавить новость</h1>
      <PostForm />
    </div>
  );
}
