import { useState } from 'react';

const useEducation = (initionalState) => {
  const [education, setEducation] = useState(initionalState);

  const setNewEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        university: '',
        city: '',
        from: '',
        to: '',
        description: '',
      },
    ]);
  };

  const deleteEducation = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEducationChange = (e, index, field) => {
    const { value } = e.target;
    setEducation((prev) => {
      const updatedEducations = [...prev];
      updatedEducations[index][field] = value;
      return updatedEducations;
    });
  };

  const setReset = (initionalState) => {
    setEducation(initionalState);
  };

  return [education, { setNewEducation, deleteEducation, handleEducationChange, setReset }];
};

export default useEducation;
