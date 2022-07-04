import React, { useEffect, useState } from 'react';
import Andi from './andi';
const AndForm = () => {
  const [andi, setAndi] = useState({
    name: '',
    role: '',
    title: '',
  });

  const handleInputChange = (e, prop) => {
    setAndi({
      ...andi,
      [prop]: e.target.value,
    });
  };

  return (
    <>
      <h3>Andi</h3>
      <div>
        <label>
          Name:
          <input
            value={andi.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </label>
      </div>

      <div>
        <label>
          Role:
          <input
            value={andi.role}
            onChange={(e) => handleInputChange(e, 'role')}
          />
        </label>
      </div>
      <div>
        <label>
          And Title:
          <input
            value={andi.title}
            onChange={(e) => handleInputChange(e, 'title')}
          />
        </label>
      </div>

      <h3>These are the values in the ANDi object using useState</h3>
      <Andi name={andi.name} role={andi.role} title={andi.title} />
    </>
  );
};

export default AndForm;
