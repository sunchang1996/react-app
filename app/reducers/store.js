import * as Types from '../acrion-types/store';
let initState = [];
export function store(state=initState,action) {
    switch (action.type){
        case Types.ADD_STORE:
            // 如果是添加则传递新的id放到数组中
            return [...state,action.data] ;
        case Types.REMOVE_STORE:
            // 通过传递的id 将数组中的某一项移除掉
            return  state.filter(item=>action.data!==item);
        default:{
            return state
        }
    }
}