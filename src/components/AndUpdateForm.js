import React, { useEffect, useState } from 'react';
import Andi from './andi';
import Card from '../UI/Card';
import classes from './AndUpdateForm.module.css';

const AndUpdateForm = (props) => {
  return (
    <form className={classes.container}>
      <label className={classes.label}>
        New Name:
        <input type="text" id="newname"></input>
      </label>
      <label className={classes.label}>
        New Role:
        <input type="text" id="newrole"></input>
      </label>
      <label className={classes.label}>
        New Title:
        <input type="text" id="newtitle"></input>
      </label>
      <button className={classes.button}>Submit</button>
    </form>
  );
};

export default AndUpdateForm;
