import * as Types from '../acrion-types/store';

export function add(id) {
    return{
        type:Types.ADD_STORE,
        data:id
    }
}
export function remove(id) {
    return{
        type:Types.REMOVE_STORE,
        data:id
    }

}