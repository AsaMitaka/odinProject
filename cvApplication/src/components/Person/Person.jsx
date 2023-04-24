import styles from './person.module.css';

const Person = ({ person: { name, surname, phonenumber, email, address } }) => {
  return (
    <div className={styles.person}>
      <div className={styles.personHeader}>
        {name} {surname}
      </div>
      <p>Number: {phonenumber}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default Person;
