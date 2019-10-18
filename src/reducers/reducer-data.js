const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS"

export const itemsData = {
    items: []
}

export const reducerData = (state, action) => {

  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.items
      };
    default:
      return { ...state };
  }
};

let itemFetchDataSuccess = items => {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
  };
};

export default itemFetchDataSuccess;
