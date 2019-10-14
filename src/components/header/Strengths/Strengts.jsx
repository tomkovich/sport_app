import React from "react";
import style from "./../Header.module.css";

export default () => {
  return (
    <div className={style.itemWrap}>
      <a href="/strenghts" className={`${style.strenghts} ${style.active}`}>
        Strengsts
      </a>
    </div>
  );
};
