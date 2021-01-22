import { takeEvery, all } from 'redux-saga/effects';

import { USER_GET_ALL, POST_GET_ALL } from '../types';
import { getAllUsersSaga } from './user';
import { getAllPostsSaga } from './post';
export function* watchUsers() {
    yield all([
        takeEvery(USER_GET_ALL, getAllUsersSaga),
        takeEvery(POST_GET_ALL, getAllPostsSaga)
    ]);
}