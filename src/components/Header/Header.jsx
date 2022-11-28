import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVkRMCtuqLFxLj8cRZhFwr9fnYI-qpg-URQ&usqp=CAU' alt="logo" />
    </header>
  );
}

export default Header;