import React from 'react';
import style from './../Content.module.css';
import Button from '../Button/Button';
import StrenghtsForm from './StrenghtsForm';

export default () => {
    return (
        <div className={style.strenghtsPage}>
           <Button />
           <StrenghtsForm />
        </div>
    )
}