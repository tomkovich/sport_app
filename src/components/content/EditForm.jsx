import React, { useState, useEffect } from "react";
import style from "./Content.module.css";

const EditForm = props => {
  const [item, setItem] = useState(props.currentItem);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  useEffect(() => {
    setItem(props.currentItem);
  }, [props]);

  return (
    <div className={style.formTraining}>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.updateItem(item, item.id);
        }}
      >
        <div className={style.formGroup}>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.formGroup}>
          <input
            type="text"
            name="time"
            value={item.time}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.formGroup}>
          <input
            type="text"
            name="date"
            value={item.date}
            onChange={handleInputChange}
          />
        </div>
        <button className={style.save}>Update</button>
      </form>
      <button onClick={() => props.setEditing(false)} className={style.cancel}>
        Cancel
      </button>
    </div>
  );
};

export default EditForm;
