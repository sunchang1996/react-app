import 'whatwg-fetch';
import 'es6-promise';
// 封装获取和设置的方法
export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    })
}
// 将对象转换成formData 格式
function toUrlencoded(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(`${key} = ${obj[key]}`);//id =1 ,comment=2
    }
    return arr.join("&")
}
export function post(url,obj) {
    return fetch(url,{
        method:'POST',
        // 手动写请求头
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: toUrlencoded(obj)
    })
}
