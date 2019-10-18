import React, { useState } from "react";
import style from "./Content.module.css";

export default props => {
  const initialState = {
    title: "",
    time: "",
    date: ""
  };

  const [data, setData] = useState(initialState);
  const [required, setRequired] = useState(false);

  let handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  let handleFormSubmit = event => {
    event.preventDefault();
    if (data.title !== "") {
      props.toggle(false);
      props.addTraining(data);
      setData({
        ...data,
        title: "",
        time: "",
        date: ""
      });
    } else {
      setRequired(true);
    }
  };

  let formCancel = () => {
    if (window.confirm("Are you sure?")) {
      props.toggle(false);
      setData({
        ...data,
        title: "",
        time: "",
        date: ""
      });
    }
  };

  return (
    <div className={style.formTraining}>
      <form onSubmit={handleFormSubmit}>
        <div className={style.formGroup}>
          <input
            className={required ? `${style.error}` : ''}
            onChange={handleInputChange}
            value={data.title}
            type="text"
            placeholder="Title"
            name="title"
          />
          {required && <span className={style.required}>Title is required!</span>}
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
        <button type="submit" className={style.save}>
          Save
        </button>
      </form>
      <button className={style.cancel} onClick={formCancel}>
        Cancel
      </button>
    </div>
  );
};
