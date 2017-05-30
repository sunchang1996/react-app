// 获取/api/ad
import {get} from '../fetch';
export function getAd() {
    return get('/api/ad')
}
// 获取list数据
export function getList(city,page) {
    return get('/api/list/' + city + '/' + page)
}