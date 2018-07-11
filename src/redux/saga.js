import { fork } from 'redux-saga/effects';
import { saga as load } from './modules/load';

export default function* () {
  yield fork(load);
}
