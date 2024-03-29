import { takeEvery, put} from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

function* getInitList() {
    try {
        const res = yield axios.get('/list.json')
        const action = initListAction(res.data);
        yield put(action)
    } catch (error) {
        console.log('json 网络请求失败')
    }
}
  
export default mySaga;