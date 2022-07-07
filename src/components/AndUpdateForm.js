import React, { useRef, useEffect, useState } from 'react';
import Andi from './andi';
import Card from '../UI/Card';
import classes from './AndUpdateForm.module.css';

const AndUpdateForm = (props) => {
  // destructuring props
  const { title, selectedId } = props;

  // on of the probs was a nested object, seemed like the only way I could get it to
  const {
    labels: { one, two, three, button },
  } = props.labels;

  const id = selectedId;

  // using ref as this dummy project doesnt include validation
  // useState would check every key stroke
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

    if (selectedId !== '') {
      props.onUpdateListItem(enteredFormData);
      // lifting data to parent component
      return;
    }
    props.onAddListItem(enteredFormData);
    // lifting data to parent component
  };

  return (
    <>
      <h2>{title}</h2>
      <form className={classes.container} onSubmit={formSubmissionHandler}>
        <label className={classes.label}>
          {one}
          <input ref={nameInputRef} type="text" id="newname"></input>
        </label>
        <label className={classes.label}>
          {two}
          <input ref={roleInputRef} type="text" id="newrole"></input>
        </label>
        <label className={classes.label}>
          {three}
          <input ref={enteredTitleRef} type="text" id="newtitle"></input>
        </label>
        <button className={classes.button}>{button}</button>
      </form>
      <button className={classes.button} onClick={props.onCancel}>
        Cancel
      </button>
    </>
  );
};

export default AndUpdateForm;
