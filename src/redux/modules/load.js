import { takeEvery } from 'redux-saga/effects';

/**
 * actions
 */
const START_LOAD = 'START_LOAD';
const COMPLETE_LOAD = 'COMPLETE_LOAD';

/**
 * reducers
 */
const initialState = {
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD:
    case COMPLETE_LOAD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

/**
 * action creaters
 */
export const startLoad = () => {
  return {
    type: START_LOAD,
    payload: { loading: true }
  };
}

/**
 * sagas
 */
export function startLoadSaga() {
  throw new Error("redux error occured.");
}

export function* saga() {
  yield takeEvery(START_LOAD, startLoadSaga);
}
