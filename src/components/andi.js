import React from 'react';
import classes from './andi.module.css';

const Andi = (props) => {
  return (
    <div
      className={
        props.selectedId === props.id
          ? classes.selectedcontainer
          : classes.container
      }
    >
      <div className={classes.item}>
        <div className={classes.key}>Id:</div>
        <div className={classes.value}>{props.id}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.key}>Name:</div>
        <div className={classes.value}>{props.name}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.key}>Role:</div>
        <div className={classes.value}> {props.role}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.key}>Title: </div>
        <div className={classes.value}>{props.title}</div>
      </div>
    </div>
  );
};

export default Andi;
