import s from './Post.module.css';

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII7F25gIOn4UM457-mPurbQkrJSO0XhnPNQ&usqp=CAU' alt="logo" />
        Post 1
      </div>
      <div>
      <span>like</span>
      </div>      
    </div>
  );
}

export default Post;
