import React from "react";
import style from "./../Content.module.css";

export default (props) => {

  return (
    <button className={style.addTraining} onClick={() => props.toggle(true)}>
      <span className={style.plus}>+</span>
      Add training
    </button>
  );
};
