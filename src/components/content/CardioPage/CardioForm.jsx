import React, { useState } from "react";
import style from "./../Content.module.css";
import { AppContext } from "../../../App";

export default () => {

  const initialState = {
    title: "",
    time: "",
    date: "",
  };


  const { dispatch } = React.useContext(AppContext);
  const [data, setData] = useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });

    
  };

  const handleFormSubmit = event => {
    event.preventDefault();
 
    dispatch({type: 'SET_CARDIO_TRAINING_DATA', data})
    setData({
      ...data,
      title: "",
      time: "",
      date: "", 
    })
  }

  return (
    <div className={style.cardioForm}>
      <form onSubmit={handleFormSubmit}>
        <div className={style.formGroup}>
          <input
            onChange={handleInputChange}
            value={data.title}
            type="text"
            placeholder="Title"
            name="title"
          />
        </div>
        <div className={style.formGroup}>
          <input
            onChange={handleInputChange}
            value={data.time}
            type="text"
            placeholder="Time"
            name="time"
          />
        </div>
        <div className={style.formGroup}>
          <input
            onChange={handleInputChange}
            value={data.date}
            type="text"
            placeholder="Date"
            name="date"
          />
        </div>
        <div className={style.formGroup}>
          <button
            type="submit"
            className={style.save} >
            Save
          </button>
          <button className={style.cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
