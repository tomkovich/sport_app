import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.itemWrap + " " + style.home}>
        <NavLink exact to="/" activeClassName={style.active}>
          All
        </NavLink>
      </div>
      <div className={style.itemWrap}>
        <NavLink
          to="/strenghts"
          className={style.strenghts}
          activeClassName={style.active}
        >
          Strengsts
        </NavLink>
      </div>
      <div className={style.itemWrap}>
        <NavLink
          to="/cardio"
          className={style.cardio}
          activeClassName={style.active}
        >
          Cardio
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Header);
