const SET_CARDIO_TRAINING_DATA = "SET_CARDIO_TRAINING_DATA";
const SET_STRENGHT_TRAINING_DATA = "SET_STRENGHT_TRAINING_DATA";
const REMOVE_CARDIO_TRAINING_DATA = "REMOVE_CARDIO_TRAINING_DATA";
const REMOVE_STRENGHT_TRAINING_DATA = "REMOVE_STRENGHT_TRAINING_DATA";
const UPDATE_CARDIO_TRAINING_DATA = "UPDATE_CARDIO_TRAINING_DATA";
const UPDATE_STRENGHT_TRAINING_DATA = "UPDATE_STRENGHT_TRAINING_DATA";

export const initialState = {
  cardios: [],
  strenghts: []
};

export const reducer = (state, action) => {
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
      };
    case REMOVE_STRENGHT_TRAINING_DATA:
      return {
        ...state,
        strenghts: state.strenghts.filter((item, i) => i !== action.id)
      };
    case UPDATE_CARDIO_TRAINING_DATA:
      return {
        ...state,
        cardios: state.cardios.map((item, i) =>
          action.id === i ? action.newItem : item
        )
      };
    case UPDATE_STRENGHT_TRAINING_DATA:
      return {
        ...state,
        strenghts: state.strenghts.map((item, i) =>
          action.id === i ? action.newItem : item
        )
      };
    default:
      return { ...state };
  }
};

export let addStrenghtTraining = data => ({ type: SET_STRENGHT_TRAINING_DATA, data });
export let addCardioTraining = data => ({ type: SET_CARDIO_TRAINING_DATA, data });
export let deleteCardioTraining = id => ({ type: REMOVE_CARDIO_TRAINING_DATA, id });
export let deleteStrenghtTraining = id => ({
  type: REMOVE_STRENGHT_TRAINING_DATA,
  id
});
export let editCardioTraining = (newItem, id) => ({
  type: UPDATE_CARDIO_TRAINING_DATA,
  newItem,
  id
});
export let editStrengthTraining = (newItem, id) => ({
  type: UPDATE_STRENGHT_TRAINING_DATA,
  newItem,
  id
});


