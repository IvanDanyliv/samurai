import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII7F25gIOn4UM457-mPurbQkrJSO0XhnPNQ&usqp=CAU' alt="logo" />
        {props.message}
      </div>
      <div>
        <span>like: {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;
