import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

function* fetchSearchSaga(action) {
    // try catch finally 구문으로 오류 제어
    try {
        const json = {
            name: action.payload
        }
        const { data } = yield call([axios, 'post'], '/api/nba/player', json)
        yield put(actions.searchSuccess(data));
    } catch (error) {
        yield put(actions.searchFail(error.response));
    }
}

export default function* watchSearch() {
    // type의 action이 실행되면 fetchSearchSaga도 항상(Every) 실행한다
    yield takeEvery(actions.SEARCH, fetchSearchSaga);
}

