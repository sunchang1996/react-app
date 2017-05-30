import React,{Component} from 'react';
import {getList} from '../../../fetch/home/home'
export default class List extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true,
            data:[]
        }
    }
    componentDidMount(){
        this.processDate(getList(this.props.cityName,0));
    }
    // 处理成功后的逻辑
    processDate(result){
        result.then(res=>res.json()).then(data=>{
            console.log(data);
        })
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}