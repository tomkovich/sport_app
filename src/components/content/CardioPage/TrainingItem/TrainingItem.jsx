import React from "react";
import style from "./../../Content.module.css";

export default props => {
  return (
    <div className={style.trainingList}>
      <div className={style.trainingItem}>
        <div className={style.itemID}>{props.id}</div>
        <div className={style.trainingInfo}>
          <div className={style.trainingTime}>{props.time}</div>
          <div className={style.trainingTitle}>{props.title}</div>
        </div>
        <div className={style.trainingDate}>{props.date}</div>
        <div className={style.deleteItem}>-</div>
      </div>
    </div>
  );
};
