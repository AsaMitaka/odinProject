import styles from './experience.module.css';

const RenderExperience = ({ experience }) => {
  return experience ? (
    experience.map((item, index) => {
      return (
        <div className={styles.experience__block} key={index}>
          <div>
            <p>
              From {item.from} - To {item.to}
            </p>
            <p>City: {item.city}</p>
          </div>
          <div>
            <p>Position: {item.position}</p>
            <p>Company: {item.company}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="experience__info">NO</div>
  );
};

const Experience = ({ experience }) => {
  return (
    <div className={styles.person__experience}>
      <h2>Person Experience</h2>
      <RenderExperience experience={experience} />
    </div>
  );
};

export default Experience;
