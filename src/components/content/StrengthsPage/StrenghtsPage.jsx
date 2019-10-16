import React, { useState } from "react";
import style from "./../Content.module.css";
import Button from "../Button/Button";
import StrenghtsForm from "./StrenghtsForm";
import StrenghtList from "./StrenghtList";

export default () => {

  const [isToggle, setToggle] = useState(false)

  return (
    <div className={style.strenghtsPage}>
      <h1>Your Strenght Trainings</h1>
      <Button toggle={setToggle}/>
      {isToggle && <StrenghtsForm toggle={setToggle}/>}
      <StrenghtList />
    </div>
  );
};
