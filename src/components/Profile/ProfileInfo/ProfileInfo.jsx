import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUH1LXnKhsqC1XBEPBTeSKu2lKMcQdM-gThA&usqp=CAU' alt="logo" />
      </div>
      <div className={s.description_block}>
        ava+descr
      </div>
    </div>
  );
}

export default ProfileInfo;
