import React from "react";
import style from "./../Content.module.css";
import { AppContext } from "../../../App";
import TrainingItem from "../TrainingItem/TrainingItem";

export default () => {

  const { state, deleteCardioItem } = React.useContext(AppContext);
  
  return (
    <> 
      <div className={style.total}>
        Total Trainings: {state.cardios.length}
      </div>

      {state.cardios.length > 0 && state.cardios.map((t, index) => (
        <TrainingItem
          key={index}
          title={t.title}
          id={index}
          date={t.date}
          time={t.time}
          deleteItem={deleteCardioItem}
        />
      ))}
    </>
  );
};
