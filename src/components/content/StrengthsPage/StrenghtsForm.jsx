import React, { useState } from "react";
import style from "./../Content.module.css";
import { AppContext } from "../../../App";

export default props => {
  const { addStrenghtItem } = React.useContext(AppContext);

  const initialState = {
    title: "",
    time: "",
    date: ""
  };

  const [data, setData] = useState(initialState);

  let handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  let handleFormSubmit = event => {
    event.preventDefault();
    props.toggle(false);
    addStrenghtItem(data);
    setData({
      ...data,
      title: "",
      time: "",
      date: ""
    });
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
