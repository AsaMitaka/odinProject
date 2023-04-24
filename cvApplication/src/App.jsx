import { useState } from 'react';
import './App.css';
import {
  Button,
  Person,
  PersonInputs,
  Experience,
  ExperienceInputs,
  Education,
  EducationInputs,
} from './components';
import { usePerson, useEducation, useExperience } from './hooks/';

function App() {
  const [isShow, setShow] = useState(true);

  const hideInputs = () => {
    setShow((prev) => !prev);
  };

  const initialPerson = {
    name: '',
    surname: '',
    email: '',
    phonenumber: '',
    address: '',
  };

  const initialEducations = [
    {
      university: '',
      city: '',
      from: '',
      to: '',
      description: '',
    },
  ];

  const initialExperience = [
    {
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    },
  ];

  const [person, setPerson] = usePerson(initialPerson);
  const [educations, setEducation] = useEducation(initialEducations);
  const [experience, setExperience] = useExperience(initialExperience);

  const handleReset = () => {
    setPerson.setReset(initialPerson);
    setEducation.setReset(initialEducations);
    setExperience.setReset(initialExperience);
  };

  const clazz = isShow ? 'card__left' : 'unshow';

  return (
    <main className="container">
      <h1>CV Application</h1>
      <Button onClick={hideInputs}>{isShow ? 'Hide' : 'Show'}</Button>
      <div className="cvv__block">
        <div className={clazz}>
          <PersonInputs person={person} setPerson={setPerson} />
          <EducationInputs educations={educations} setEducation={setEducation} />
          <ExperienceInputs experience={experience} setExperience={setExperience} />
          <Button onClick={handleReset}>Reset</Button>
        </div>
        <div className="card__right">
          <Person person={person} />
          <Education education={educations} />
          <Experience experience={experience} />
        </div>
      </div>
    </main>
  );
}

export default App;
