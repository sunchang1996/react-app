import React,{Component} from 'react';
import {getList} from '../../../fetch/home/home';
import ListComponent from "../../../components/ListComponent/index";

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
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data
            })
        })
    }
    render(){
        return (
            <div>
                {/*将数据传递给ListComponent组件*/}
                {
                    this.state.data.length?<ListComponent data={this.state.data}/>: <div>正在加载中...</div>
                }

            </div>
        )
    }
}