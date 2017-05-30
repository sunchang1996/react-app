import 'whatwg-fetch';
import 'es6-promise';
// 封装获取和设置的方法
export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    })
}
