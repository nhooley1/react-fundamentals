import React, { useState } from 'react';
import Andi from './andi';
import Card from '../UI/Card';
import AndUpdateForm from './AndUpdateForm';
import classes from './AndList.module.css';

const AndList = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [enteredName, setEnteredName] = useState(false);
  const [selected, setSelected] = useState('');
  const [andiList, setAndiList] = useState([
    {
      id: 1,
      name: 'Nicholas Hooley',
      role: 'Developer',
      title: 'Tennis fanatic',
    },

    {
      id: 2,
      name: 'Bill Withington',
      role: 'Analyst',
      title: 'Caffiene addict',
    },
    {
      id: 3,
      name: 'Timothy Peters',
      role: 'User Experience',
      title: 'Interior design enthusiast',
    },
  ]);

  const onUpdateAndiHandler = (event) => {
    event.preventDefault();
    event.target.reset();

    const andi = andiList.find((obj) => {
      return obj.name === enteredName;
    });
  };

  const onEnteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onUpdateHandler = (id) => {
    setShowUpdateForm(true);
    console.log('update');
    const andi = andiList.find((obj) => {
      return obj.id === id;
    });
    console.log(andi);
  };

  const onDeleteHandler = (id) => {
    console.log('delete');

    console.log('hello');
    const andi = andiList.find((obj) => {
      return obj.key === id;
    });
    console.log(andi);
  };

  const setSelectedId = (id) => {
    console.log('the selected id is' + id);
    setSelected(id);
  };

  return (
    <>
      <h3>List of ANDi's ----- Stored in useState</h3>
      <Card>
        {andiList.map((andi) => (
          <div className={classes.container}>
            <Andi
              id={andi.id}
              key={andi.id}
              name={andi.name}
              role={andi.role}
              title={andi.title}
              selectedId={selected}
            />
            <button
              onClick={() => {
                setSelectedId(andi.id);
                onUpdateHandler(andi.id);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                setSelectedId(andi.id);
                onDeleteHandler(andi.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </Card>
      <p></p>
      {showUpdateForm && (
        <AndUpdateForm
          onSubmit={onUpdateAndiHandler}
          onEntered={onEnteredNameHandler}
        />
      )}
    </>
  );
};

export default AndList;
