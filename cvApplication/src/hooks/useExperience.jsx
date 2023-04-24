import { useState } from 'react';

const useExperience = (initionalState) => {
  const [experience, setExperience] = useState(initionalState);

  const setNewExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    ]);
  };

  const deleteExperience = (index) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (e, index, field) => {
    const { value } = e.target;
    setExperience((prev) => {
      const updatedExperience = [...prev];
      updatedExperience[index][field] = value;
      return updatedExperience;
    });
  };

  const setReset = (initionalState) => {
    setExperience(initionalState);
  };

  return [experience, { setNewExperience, deleteExperience, handleExperienceChange, setReset }];
};

export default useExperience;
