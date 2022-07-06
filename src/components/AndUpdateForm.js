import React, { useRef, useEffect, useState } from 'react';
import Andi from './andi';
import Card from '../UI/Card';
import classes from './AndUpdateForm.module.css';

const AndUpdateForm = (props) => {
  // using ref as this dummy project doesnt include validation
  // useState would check every key stroke

  const id = props.selectedId;
  const nameInputRef = useRef();
  const roleInputRef = useRef();
  const enteredTitleRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const role = roleInputRef.current.value;
    const title = enteredTitleRef.current.value;

    const enteredFormData = {
      id,
      name,
      role,
      title,
    };

    // lifting data to parent component
    props.onUpdateListItem(enteredFormData);
  };

  return (
    <form className={classes.container} onSubmit={formSubmissionHandler}>
      <label className={classes.label}>
        New Name:
        <input ref={nameInputRef} type="text" id="newname"></input>
      </label>
      <label className={classes.label}>
        New Role:
        <input ref={roleInputRef} type="text" id="newrole"></input>
      </label>
      <label className={classes.label}>
        New Title:
        <input ref={enteredTitleRef} type="text" id="newtitle"></input>
      </label>
      <button className={classes.button}>Update</button>
    </form>
  );
};

export default AndUpdateForm;
