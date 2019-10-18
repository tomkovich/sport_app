import React from "react";
import style from "./../Content.module.css";

export default props => {
  let deleteTraining = () => {
    props.setIsSearch(false);
    props.deleteItem(props.id);
  };
  return (
    <div className={style.trainingItem}>
      <div className={style.itemID}>{props.id + 1}</div>
      <div className={style.trainingInfo}>
        <div className={style.trainingTime}>{props.time}</div>
        <div className={style.trainingTitle}>{props.title}</div>
      </div>
      <div className={style.trainingDate}>{props.date}</div>
      <div className={style.deleteItem} onClick={deleteTraining}></div>
      <div
        className={style.editItem}
        onClick={() => props.editTraining(props.id)}
      ></div>
    </div>
  );
};
