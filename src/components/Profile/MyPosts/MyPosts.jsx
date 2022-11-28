import Post from './MyPost/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={s.posts_block}>
      <Post message='Hi, how are you?' />
      <Post message='It is my first post' />
    </div>
  );
}

export default MyPosts;
