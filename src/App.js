import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';

export default () => {
  return (
    <div className="app_container">
      <Header />
      <Content />
    </div>
  );
}
