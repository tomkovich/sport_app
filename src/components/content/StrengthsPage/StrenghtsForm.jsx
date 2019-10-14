import React from "react";
import style from "./../Content.module.css";

export default () => {
  return (
    <div className={style.cardioForm}>
      <form>
        <div className={style.formGroup}>
          <input type="text" placeholder="Title" name="title" />
        </div>
        <div className={style.formGroup}>
          <input type="text" placeholder="Time" name="time" />
        </div>
        <div className={style.formGroup}>
          <input type="text" placeholder="Date" name="date" />
        </div>
        <div className={style.formGroup}>
          <button type="submit" className={style.save}>
            Save
          </button>
          <button className={style.cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
