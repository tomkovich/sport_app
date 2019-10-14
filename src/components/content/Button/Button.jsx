import React from "react";
import style from "./../Content.module.css";

export default () => {
  return (
    <button className={style.addTraining}>
      <span className={style.plus}>+</span>
      Add training
    </button>
  );
};
