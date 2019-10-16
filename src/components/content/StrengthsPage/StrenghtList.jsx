import React from "react";
import style from "./../Content.module.css";
import { AppContext } from "../../../App";
import TrainingItem from "../TrainingItem/TrainingItem";

export default () => {

  const { state, deleteStrenghtItem } = React.useContext(AppContext);

  return (
    <>
    
      <div className={style.total}>
        Total Trainings: {state.strenghts.length}
      </div>

      {state.strenghts.length > 0 && state.strenghts.map((t, index) => (
        <TrainingItem
          data={state.strenghts}
          key={index}
          title={t.title}
          id={index}
          date={t.date}
          time={t.time}
          deleteItem={deleteStrenghtItem}
        />
      ))}
    </>
  );
};
