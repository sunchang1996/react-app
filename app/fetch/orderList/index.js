import {get} from '../fetch';

export function getOrderList(username) {
    return get('/api/orderlist/'+username);

}