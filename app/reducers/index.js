// 合并所有reducer 导出去 ，让store 使用
import {combineReducers} from 'redux';
import {userInfo} from '../reducers/reducers';
export default combineReducers({
    userInfo
})