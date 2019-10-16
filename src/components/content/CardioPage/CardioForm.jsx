import React, { useState } from "react";
import style from "./../Content.module.css";
import { AppContext } from "../../../App";

export default props => {
  const initialState = {
    title: "",
    time: "",
    date: ""
  };

  const { addCardioItem } = React.useContext(AppContext);
  const [data, setData] = useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    props.toggle(true);
    addCardioItem(data);
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
      <button onClick={formCancel} className={style.cancel}>
        Cancel
      </button>
    </div>
  );
};
