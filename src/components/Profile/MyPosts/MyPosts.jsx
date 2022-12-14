import Post from './MyPost/Post';
import s from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {

  let post_elements =
    props.posts.map(m => <Post message={m.message} likeCount={m.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div className={s.posts}>
        { post_elements }
      </div>
    </div>
  );
}

export default MyPosts;
