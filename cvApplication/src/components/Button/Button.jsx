import styles from './button.module.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
