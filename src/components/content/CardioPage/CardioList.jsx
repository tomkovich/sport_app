import React from "react";
import style from "./../Content.module.css";
import { AppContext } from "../../../App";
import TrainingItem from "../TrainingItem/TrainingItem";

export default () => {

  const { state, dispatch } = React.useContext(AppContext);

  let deleteItem = id => {
    dispatch({type: 'REMOVE_CARDIO_TRAINING_DATA', id})
  };

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
          deleteItem={deleteItem}
        />
      ))}
    </>
  );
};
