import React, { useState, useEffect } from "react";
import style from "./Content.module.css";
import Preloader from "./Preloader/Preloader";

export default props => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (props.data.items.length > 0) {
      setLoading(true);
    }
  }, [props.data.items.length]);

  
  return (
    <div>
      <h1>All trainings</h1>
      {!isLoading ? (
        <Preloader />
      ) : (
        <div className={style.trainingList}>
          {props.data.items.map(item => (
            <Training key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const Training = props => {
  return (
    <div className={style.trainingItem}>
      <div className={style.trainingInfo}>
        <div className={style.trainingTime}>{props.item.time}</div>
        <div className={style.trainingTitle}>{props.item.title}</div>
      </div>
      <div className={style.trainingDate}>{props.item.date}</div>
    </div>
  );
};
