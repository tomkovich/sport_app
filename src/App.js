import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { BrowserRouter } from "react-router-dom";
import {
  reducer,
  initialState,
  addStrenghtTraining,
  addCardioTraining,
  deleteCardioTraining,
  deleteStrenghtTraining,
  editCardioTraining,
  editStrengthTraining
} from "./reducers/reducer-training";
import { itemsData, reducerData } from "./reducers/reducer-data";
import itemFetchDataSuccess from "./reducers/reducer-data";

export const AppContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, dispatchData] = useReducer(reducerData, itemsData);
  // console.log(data)
  let addStrenghtItem = data => {
    dispatch(addStrenghtTraining(data));
  };
  let addCardioItem = data => {
    dispatch(addCardioTraining(data));
  };
  let deleteCardioItem = id => {
    dispatch(deleteCardioTraining(id));
  };
  let deleteStrenghtItem = id => {
    dispatch(deleteStrenghtTraining(id));
  };
  let updateCardioTraining = (newItem, id) => {
    dispatch(editCardioTraining(newItem, id));
  };
  let updateStrengthTraining = (newItem, id) => {
    dispatch(editStrengthTraining(newItem, id));
  };

  useEffect(() => {
    let trainingsData = url => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(items => dispatchData(itemFetchDataSuccess(items)));
    };
    trainingsData("/api/items");
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          state,
          data,
          deleteCardioItem,
          deleteStrenghtItem,
          addStrenghtItem,
          updateCardioTraining,
          updateStrengthTraining,
          addCardioItem
        }}
      >
        <div className="appContainer">
          <Header />
          <Content />
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
