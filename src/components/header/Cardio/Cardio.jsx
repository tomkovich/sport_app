import React from "react";
import style from "./../Header.module.css";

export default () => {
  return (
    <div className={style.itemWrap}>
      <a href="/cardio" className={style.cardio}>
        Cardio
      </a>
    </div>
  );
};
