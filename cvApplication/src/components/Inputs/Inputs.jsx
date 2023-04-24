import styles from './inputs.module.css';

const Inputs = ({ type = 'text', value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className={styles.inputs}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Inputs;
