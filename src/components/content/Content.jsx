import React from "react";
import style from "./Content.module.css";
import { Route } from "react-router-dom";
import Page from "./hoc/Page";
import { AppContext } from "../../App";
import HomePage from "./HomePage";

export default () => {
  const {
    state,
    data,
    addStrenghtItem,
    deleteStrenghtItem,
    addCardioItem,
    deleteCardioItem,
    updateCardioTraining,
    updateStrengthTraining,
  } = React.useContext(AppContext);

  return (
    <div className={style.appContent}>
      <Route 
      exact path="/"
      render={() => <HomePage data={data}/>}
      />
      <Route
        path="/cardio"
        render={() => (
          <Page
            title={"Your Cardio Trainings"}
            type={state.cardios}
            addTraining={addCardioItem}
            deleteTraining={deleteCardioItem}
            updateTraining={updateCardioTraining}
          />
        )}
      />

      <Route
        path="/strenghts"
        render={() => (
          <Page
            title={"Your Strenght Trainings"}
            type={state.strenghts}
            addTraining={addStrenghtItem}
            deleteTraining={deleteStrenghtItem}
            updateTraining={updateStrengthTraining}
          />
        )}
      />
    </div>
  );
};
