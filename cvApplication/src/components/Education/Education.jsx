import styles from './education.module.css';

const RenderEducation = ({ education }) => {
  return education ? (
    education.map((item, index) => {
      return (
        <div className={styles.experience__block} key={index}>
          <div>
            <p>
              From {item.from} - To {item.to}
            </p>
            <p>City: {item.city}</p>
          </div>
          <div>
            <p>Univerity: {item.university}</p>
            <p>description {item.description}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="education__info">NO</div>
  );
};

const Education = ({ education }) => {
  return (
    <div className={styles.person__education}>
      <h2>Person Education</h2>
      <RenderEducation education={education} />
    </div>
  );
};

export default Education;
