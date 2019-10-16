import React, { useReducer } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { BrowserRouter } from 'react-router-dom';
export const AppContext = React.createContext();

const SET_CARDIO_TRAINING_DATA = 'SET_CARDIO_TRAINING_DATA';
const SET_STRENGHT_TRAINING_DATA = 'SET_STRENGHT_TRAINING_DATA';
const REMOVE_CARDIO_TRAINING_DATA = 'REMOVE_CARDIO_TRAINING_DATA';
const REMOVE_STRENGHT_TRAINING_DATA = 'REMOVE_STRENGHT_TRAINING_DATA';

const initialState = {
  cardios: [],
  strenghts: []
}

const reducer = (state, action) => {

  switch (action.type) {
    case SET_CARDIO_TRAINING_DATA:
      return {
        ...state,
        cardios: [...state.cardios, action.data]
      };
      case SET_STRENGHT_TRAINING_DATA:
        return {
          ...state,
          strenghts: [...state.strenghts, action.data]
        };
        case REMOVE_CARDIO_TRAINING_DATA:
        return {
          ...state,
          cardios: state.cardios.filter((item, i) => {
            return i !== action.id;
          })
        }
        case REMOVE_STRENGHT_TRAINING_DATA:
        return {
          ...state,
          strenghts: state.strenghts.filter((item, i) => {
            return i !== action.id;
          })
        }
      default:
        return {...state}
  }
}


let addStrenghtTraining = (data) => ({ type: SET_STRENGHT_TRAINING_DATA, data })
let addCardioTraining = (data) => ({ type: SET_CARDIO_TRAINING_DATA, data })
let deleteCardioTraining = (id) => ({type: REMOVE_CARDIO_TRAINING_DATA, id})
let deleteStrenghtTraining = (id) => ({type: REMOVE_STRENGHT_TRAINING_DATA, id})

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)


  let addStrenghtItem = (data) => {
    dispatch(addStrenghtTraining(data));
  }
  let addCardioItem = (data) => {
    dispatch(addCardioTraining(data));
  }
  let deleteCardioItem = id => {
    dispatch(deleteCardioTraining(id))
  };
  let deleteStrenghtItem = id => {
    dispatch(deleteStrenghtTraining(id))
  };

  return (
    <BrowserRouter>
    <AppContext.Provider value= {{ 
      state, 
      dispatch, 
      deleteCardioItem, 
      deleteStrenghtItem,
      addStrenghtItem,
      addCardioItem }}>
      <div className="appContainer">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;