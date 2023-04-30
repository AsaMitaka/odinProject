import { NavLink } from 'react-router-dom';
import styles from './leftblock.module.css';

const LeftBlock = () => {
  return (
    <section className={styles.leftBlock}>
      <NavLink to="/">Logo</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/notification">Notification</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/setting">Settings</NavLink>
    </section>
  );
};

export default LeftBlock;
