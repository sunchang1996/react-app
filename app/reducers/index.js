// 合并所有reducer 导出去 ，让store 使用
import {combineReducers} from 'redux';
import {userInfo} from '../reducers/reducers';
import {store} from './store';
// 合并reducer 会将 以前的state 增加一个userInfo 属性
export default combineReducers({
    userInfo,
    store
})