import Post from './MyPost/Post';
import s from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {

  let postElements =
    props.posts.map(m => <Post message={m.message} likeCount={m.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
  }

  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
