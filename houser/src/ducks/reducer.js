let initialState = {
  housesData: []
};

const UPDATE_HOUSES = "UPDATE_HOUSES";

export default function reducer(state = initialState, action){
  let { type, payload } = action;
  switch (type){
    case UPDATE_HOUSES:
      return { ...state, housesData: payload };
    default:
      return state;
  }
}

export function updateHouses(houses){
  return {
    type: UPDATE_HOUSES,
    payload: houses
  }
}