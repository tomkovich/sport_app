import React from 'react';
import style from './Content.module.css';
import StrenghtsPage from './StrengthsPage/StrenghtsPage';
import CardioPage from './CardioPage/CardioPage';

export default () => {
    return (
        <div className={style.appContent}>
           {/* <StrenghtsPage /> */}
           <CardioPage />
        </div>
    )
}