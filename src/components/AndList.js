import React, { useState } from 'react';
import Andi from './andi';
import Card from '../UI/Card';
import AndUpdateForm from './AndUpdateForm';
import classes from './AndList.module.css';

const AndList = (props) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  const [formTitle, setFormTitle] = useState('');
  const [formLabels, setFormLabels] = useState({});
  const [formError, setFormError] = useState(false);

  let updateText = '';

  console.log('re-render');

  const [andiList, setAndiList] = useState([
    {
      id: 1,
      name: 'Nicholas Hooley',
      role: 'DEV',
      title: 'Lover of all things DEV',
    },

    {
      id: 2,
      name: 'Bill Withington',
      role: 'BA',
      title: 'Lover of all things BA',
    },
    {
      id: 3,
      name: 'Tim Peters',
      role: 'UX',
      title: 'Lover of all things UX',
    },
  ]);

  const onUpdateListItem = (andi) => {
    // spread operator to make shallow copy of object
    let updatedAndi = { ...andi };

    for (const [key, value] of Object.entries(updatedAndi)) {
      console.log(`${key}: ${value}`);
    }

    const updatedData = andiList.map((x) =>
      x.id === updatedAndi.id ? updatedAndi : x
    );
    setAndiList(updatedData);
    setIsUpdated(true);
    setShowAddButton(true);
    setSelectedId('');
    updateText = 'ANDi has been successfully updated!';
  };

  const onAddListItem = (andi) => {
    let addedAndi = { ...andi };

    const ids = andiList.map((andi) => {
      return andi.id;
    });

    if (ids.length === 0) {
      addedAndi.id = 1;
    } else {
      let max = Math.max(...ids);
      addedAndi.id = ++max;
    }
    setAndiList((andList) => [...andList, addedAndi]);
    setShowAddButton(false);
    setShowUpdateForm(false);
    setShowAddButton(true);
    updateText = 'ANDi has been successfully updated!';
  };

  const onUpdateHandler = () => {
    setShowAddButton(false);

    const labels = {
      labels: {
        one: 'Updated Name: ',
        two: 'Updated Role: ',
        three: 'Updated Title: ',
        button: 'Update',
      },
    };

    setFormLabels(labels);

    setFormTitle('Update ANDi');
    setIsUpdated(false);
    setShowUpdateForm(true);
  };

  const onDeleteHandler = (id) => {
    setAndiList((currentAndiList) =>
      currentAndiList.filter((andi) => {
        return andi.id !== id;
      })
    );
  };

  const onAddHandler = () => {
    setIsUpdated(false);
    setShowAddButton(false);
    setSelectedId('');

    const labels = {
      labels: {
        one: 'Name: ',
        two: 'Role: ',
        three: 'Title: ',
        button: 'Add',
      },
    };
    setFormLabels(labels);
    setFormTitle('Add ANDi');
    setShowUpdateForm(true);
  };

  const onCancelHandler = () => {
    setFormError(false);
    setShowUpdateForm(false);
    setShowAddButton(true);
    setSelectedId('');
  };

  return (
    <>
      <h2>List of ANDi's</h2>
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
                className={classes.update}
                onClick={() => {
                  setSelectedId(andi.id);
                  onUpdateHandler(andi.id);
                }}
              >
                Update
              </button>
              <button
                className={classes.delete}
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
      {showAddButton && (
        <button
          className={classes.add}
          onClick={() => {
            onAddHandler();
          }}
        >
          Add
        </button>
      )}
      {showUpdateForm && !isUpdated && (
        <AndUpdateForm
          title={formTitle}
          selectedId={selectedId}
          onUpdateListItem={onUpdateListItem}
          onAddListItem={onAddListItem}
          onCancel={onCancelHandler}
          labels={formLabels}
          setError={setFormError}
        />
      )}
      {isUpdated && <p>{updateText}</p>}
      {formError && <p>Please enter some values!</p>}
    </>
  );
};

export default AndList;
