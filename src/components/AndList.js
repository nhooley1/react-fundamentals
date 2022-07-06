import React, { useEffect, useState } from 'react';
import Andi from './andi';
import Card from '../UI/Card';
import AndUpdateForm from './AndUpdateForm';
import classes from './AndList.module.css';

const AndList = (props) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [andiList, setAndiList] = useState([
    {
      id: 1,
      name: 'timmyy',
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

  const onUpdateListItem = (andi) => {
    // spread operator to make shallow copy of object
    let updatedAndi = { ...andi };

    const updatedData = andiList.map((x) =>
      x.id === updatedAndi.id ? updatedAndi : x
    );
    setAndiList(updatedData);
    setIsUpdated(true);
    setSelectedId('');
  };

  const onUpdateHandler = (id) => {
    setShowUpdateForm(true);
    const andi = andiList.find((obj) => {
      return obj.id === id;
    });
  };

  const onDeleteHandler = (id) => {
    const andi = andiList.find((obj) => {
      return obj.key === id;
    });
    console.log(andi);
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
              selectedId={selectedId}
            />
            <div
              className={
                selectedId === andi.id
                  ? classes.hidden
                  : classes.buttoncontainer
              }
            >
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
          </div>
        ))}
      </Card>
      <p></p>
      {showUpdateForm && !isUpdated && (
        <AndUpdateForm
          selectedId={selectedId}
          onUpdateListItem={onUpdateListItem}
        />
      )}
      {isUpdated && <p>ANDi has been successfully updated!</p>}
    </>
  );
};

export default AndList;
