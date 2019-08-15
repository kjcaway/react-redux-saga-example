import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

function* fetchBoardsSaga(action) {
    // try catch finally 구문으로 오류 제어가 가능하다.
    try {
        // 이부분을 call 메소드를 이용해 테스트가 쉽게 바꿀 수 있다.
        // (yeild를 사용하기 때문에 next 명령어로 반복 가능하므로)
        const json = {
            name: action.payload
        }
        const { data } = yield call([axios, 'post'], '/api/nba/player', json)
        // const { data } = yield axios.post("/api/nba/player");
        yield put(actions.searchSuccess(data));
    } catch (error) {
        yield put(actions.searchFail(error.response));
    }
}

export default function* watchSearch() {
    // type의 action이 실행되면 fetchBoardsSaga도 항상(Every) 실행한다
    yield takeEvery(actions.SEARCH, fetchBoardsSaga);
}

