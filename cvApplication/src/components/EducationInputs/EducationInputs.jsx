import styles from './educationInputs.module.css';
import { Inputs, Button } from '../index';

const EducationInputs = ({ educations, setEducation }) => {
  return (
    <div className={styles.educationInputsBlock}>
      <h2>Education</h2>
      {educations.map((education, index) => (
        <div className={styles.educationInputs} key={index}>
          <Inputs
            placeholder="University"
            value={education.university}
            onChange={(e) => setEducation.handleEducationChange(e, index, 'university')}
          />
          <Inputs
            placeholder="City"
            value={education.city}
            onChange={(e) => setEducation.handleEducationChange(e, index, 'city')}
          />
          <Inputs
            placeholder="From"
            value={education.from}
            onChange={(e) => setEducation.handleEducationChange(e, index, 'from')}
          />
          <Inputs
            placeholder="To"
            value={education.to}
            onChange={(e) => setEducation.handleEducationChange(e, index, 'to')}
          />
          <Inputs
            placeholder="Description"
            value={education.description}
            onChange={(e) => setEducation.handleEducationChange(e, index, 'description')}
          />
          <Button onClick={() => setEducation.deleteEducation(index)}>Delete</Button>
        </div>
      ))}
      <Button onClick={setEducation.setNewEducation}>Add</Button>
    </div>
  );
};

export default EducationInputs;
