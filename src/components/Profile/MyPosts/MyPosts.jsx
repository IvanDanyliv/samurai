import Post from './MyPost/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

  let post_data = [
    { id: 1, message: 'Hi, how are you?'  },
    { id: 2, message: 'It is my first post' }
  ]

  return (
    <div className={s.posts_block}>
      <Post message={post_data[0].message}/>
      <Post message={post_data[ 1].message} />
    </div>
  );
} 

export default MyPosts;
