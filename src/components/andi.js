import React from 'react';
import classes from './andi.module.css';

const Andi = (props) => {
  return (
    <div className={classes.container}>
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
      {props.selectedId == props.id && <p>EDITING THIS ONE!!!</p>}
    </div>
  );
};

export default Andi;
