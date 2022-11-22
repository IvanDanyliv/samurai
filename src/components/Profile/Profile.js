import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUH1LXnKhsqC1XBEPBTeSKu2lKMcQdM-gThA&usqp=CAU' alt="logo" />
      </div>
      <div>
        ava+descr
      </div>
      <div>
        <MyPosts />
      </div>
    </div>

  );
}

export default Profile;
