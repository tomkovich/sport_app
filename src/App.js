import React, { useReducer } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
export const AppContext = React.createContext();

const initialState = {
  cardios: [],
  strenghts: []
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_CARDIO_TRAINING_DATA":
      return {
        ...state,
        cardios: [...state.cardios, action.data]
      };
      case "SET_STRENGHT_TRAINING_DATA":
        return {
          ...state,
          strenghts: [...state.strenghts, action.data]
        };
        case "REMOVE_CARDIO_TRAINING_DATA":
        return {
          ...state,
          cardios: state.cardios.filter((item, i) => {
            return i !== action.id;
          })
        }
        case "REMOVE_STRENGHT_TRAINING_DATA":
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

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value= {{ state, dispatch }}>
      <div className="appContainer">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;