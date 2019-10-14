import React from "react";
import style from "./../Content.module.css";
import TrainingItem from "./TrainingItem/TrainingItem";

export default () => {
  let state = {
    trainings: [
      {
        id: 1,
        time: "1 hour 23 minutes",
        date: "10/14/2019",
        title: "Bicycle"
      },
      {
        id: 2,
        time: "1 hour 41 minutes",
        date: "10/12/2019",
        title: "Running"
      },
      {
        id: 3,
        time: "59 minutes",
        date: "10/10/2019",
        title: "Running, sprint"
      }
    ]
  };

  return (
    <>
      <div className={style.total}>
        Training Total: {state.trainings.length}
      </div>
      {state.trainings.map(t => (
        <TrainingItem
          key={t.id}
          title={t.title}
          id={t.id}
          date={t.date}
          time={t.time}
        />
      ))}
    </>
  );
};
