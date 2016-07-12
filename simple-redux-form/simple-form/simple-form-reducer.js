import { CHANGE_NAME, CHANGE_GENDER } from './simple-form-actions';
const initialState = { name: '', gender: '' };

export default function simpleFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload.name };

    case CHANGE_GENDER:
      return { ...state, gender: action.payload.gender };

    default:
      return state;
  }
}
