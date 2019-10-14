import React from 'react';
import style from './Header.module.css';
import Cardio from './Cardio/Cardio';
import Strengts from './Strengths/Strengts';

export default () => {
    return (
        <div className={style.header}>
            <Strengts />
            <Cardio />
        </div>
    )
}