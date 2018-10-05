let initialState = {
  housesData: [],
  image_url: '',
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: null,
  morgage: null,
  rent: null
};

const UPDATE_HOUSES = "UPDATE_HOUSES",
      UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL",
      UPDATE_NAME = "UPDATE_NAME",
      UPDATE_ADDRESS = "UPDATE_ADDRESS",
      UPDATE_CITY = "UPDATE_CITY",
      UPDATE_STATE = "UPDATE_STATE",
      UPDATE_ZIP = "UPDATE_ZIP",
      UPDATE_MORGAGE = "UPDATE_MORGAGE",
      UPDATE_RENT = "UPDATE_RENT",
      RESET_WIZARD_DATA = "RESET_WIZARD_DATA";

export default function reducer(state = initialState, action){
  let { type, payload } = action;
  switch (type){
    case UPDATE_HOUSES:
      return { ...state, housesData: payload };
    case UPDATE_IMAGE_URL:
      return { ...state, image_url: payload };
    case UPDATE_NAME:
      return Object.assign({}, state, { name: payload });
    case UPDATE_ADDRESS:
      return { ...state, address: payload };
    case UPDATE_CITY:
      return { ...state, city: payload };
    case UPDATE_STATE:
      return { ...state, state: payload };
    case UPDATE_ZIP:
      return { ...state, zipcode: payload };
    case UPDATE_MORGAGE:
      return { ...state, morgage: payload };
    case UPDATE_RENT:
      return { ...state, rent: payload };
    case RESET_WIZARD_DATA:
      return { ...state, image_url: '', name: '', address: '', city: '', state: '', zipcode: 0, morgage: 0, rent: 0 };
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

export function updateImageUrl(image_url){
  return {
    type: UPDATE_IMAGE_URL,
    payload: image_url
  }
}

export function updateName(name){
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateAddress(address){
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export function updateCity(city){
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateState(state){
  return {
    type: UPDATE_STATE,
    payload: state
  }
}

export function updateZip(zip){
  return {
    type: UPDATE_ZIP,
    payload: zip
  }
}

export function updateMorgage(morgage){
  return {
    type: UPDATE_MORGAGE,
    payload: morgage
  }
}

export function updateRent(rent){
  return {
    type: UPDATE_RENT,
    payload: rent
  }
}

export function resetWizardData(){
  return {
    type: RESET_WIZARD_DATA
  }
}
