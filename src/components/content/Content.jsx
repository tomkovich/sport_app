import React from "react";
import style from "./Content.module.css";
import { Route } from 'react-router-dom';
import StrenghtsPage from "./StrengthsPage/StrenghtsPage";
import CardioPage from "./CardioPage/CardioPage";

export default () => {
  return (
    <div className={style.appContent}>
      <Route path="/strenghts" render={ () => <StrenghtsPage /> } />
      <Route path="/cardio" render={ () => <CardioPage /> } />
    </div>
  );
};
