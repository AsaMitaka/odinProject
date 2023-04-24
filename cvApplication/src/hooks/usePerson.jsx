import { useState } from 'react';

const usePerson = (initionalState) => {
  const [person, setPerson] = useState(initionalState);

  const setName = (value) => {
    setPerson((prev) => ({ ...prev, name: value }));
  };

  const setSurname = (value) => {
    setPerson((prev) => ({ ...prev, surname: value }));
  };

  const setAddress = (value) => {
    setPerson((prev) => ({ ...prev, address: value }));
  };

  const setPhonenumber = (value) => {
    if (value.length > 12) return;
    setPerson((prev) => ({ ...prev, phonenumber: value }));
  };

  const setEmail = (value) => {
    setPerson((prev) => ({ ...prev, email: value }));
  };

  const setReset = (initionalState) => {
    setPerson(initionalState);
  };

  return [person, { setName, setSurname, setAddress, setPhonenumber, setEmail, setReset }];
};

export default usePerson;
