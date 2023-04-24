import Inputs from '../Inputs/Inputs';
import styles from './personInputs.module.css';

const PersonInputs = ({ person, setPerson }) => {
  return (
    <div className={styles.personInputs}>
      <h2>Person Info</h2>
      <Inputs
        placeholder="name"
        value={person.name}
        onChange={(e) => setPerson.setName(e.target.value)}
      />
      <Inputs
        placeholder="surname"
        value={person.surname}
        onChange={(e) => setPerson.setSurname(e.target.value)}
      />
      <Inputs
        placeholder="address"
        value={person.address}
        onChange={(e) => setPerson.setAddress(e.target.value)}
      />
      <Inputs
        placeholder="phonenumber"
        type="number"
        value={person.phonenumber}
        onChange={(e) => setPerson.setPhonenumber(e.target.value)}
      />
      <Inputs
        placeholder="email"
        value={person.email}
        onChange={(e) => setPerson.setEmail(e.target.value)}
      />
    </div>
  );
};

export default PersonInputs;
