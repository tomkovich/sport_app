import React, { useState } from "react";
import style from "./../Content.module.css";
import Button from "../Button/Button";
import CardioForm from "./CardioForm";
import CardioList from "./CardioList";

export default () => {
  const [isToggle, setToggle] = useState(false)
  return (
    <div className={style.cardioPage}>
      <h1>Your Cardio Trainings</h1>
      <Button toggle={setToggle}/>
      {isToggle && <CardioForm toggle={setToggle}/>}
      <CardioList />
    </div>
  );
};
