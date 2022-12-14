import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import s from './Profile.module.css';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <div>
        <MyPosts posts = {props.posts} />
      </div>
    </div>

  );
}

export default Profile;
