import styles from './experienceInputs.module.css';
import { Inputs, Button } from '../index';

const ExperienceInputs = ({ experience, setExperience }) => {
  return (
    <div className={styles.experienceInputsBlock}>
      <h2>Experience</h2>
      {experience.map((experience, index) => (
        <div className={styles.experienceInputs} key={index}>
          <Inputs
            placeholder="position"
            value={experience.position}
            onChange={(e) => setExperience.handleExperienceChange(e, index, 'position')}
          />
          <Inputs
            placeholder="company"
            value={experience.company}
            onChange={(e) => setExperience.handleExperienceChange(e, index, 'company')}
          />
          <Inputs
            placeholder="city"
            value={experience.city}
            onChange={(e) => setExperience.handleExperienceChange(e, index, 'city')}
          />
          <Inputs
            placeholder="from"
            value={experience.from}
            onChange={(e) => setExperience.handleExperienceChange(e, index, 'from')}
          />
          <Inputs
            placeholder="to"
            value={experience.to}
            onChange={(e) => setExperience.handleExperienceChange(e, index, 'to')}
          />
          <Button onClick={() => setExperience.deleteExperience(index)}>Delete</Button>
        </div>
      ))}
      <Button onClick={setExperience.setNewExperience}>Add</Button>
    </div>
  );
};

export default ExperienceInputs;
