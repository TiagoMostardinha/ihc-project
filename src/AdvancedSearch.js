import React, { useState } from 'react';

const AdvancedSearch = ({ search }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const symptoms = [
    'headache',
    'muscle aches',
    'arthritis',
    'backache',
    'toothaches',
    'colds',
    'fevers',
  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedSymptoms((prevSelectedSymptoms) => {
      if (checked) {
        return [...prevSelectedSymptoms, value];
      } else {
        return prevSelectedSymptoms.filter((symptom) => symptom !== value);
      }
    });
  };

  React.useEffect(() => {
    search(selectedSymptoms);
  }, [selectedSymptoms, search]);

  return (
    <div>
      {symptoms.map((symptom) => (
        <div key={symptom}>
          <label>
            <input
              type="checkbox"
              value={symptom}
              onChange={handleCheckboxChange}
            />
            {symptom}
          </label>
        </div>
      ))}
    </div>
  );
};

export default AdvancedSearch;
