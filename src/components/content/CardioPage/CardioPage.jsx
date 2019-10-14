import React from 'react';
import style from './../Content.module.css';
import Button from '../Button/Button';
import CardioForm from './CardioForm';

export default () => {
    return (
        <div className={style.cardioPage}>
           <Button />
           <CardioForm />
        </div>
    )
}