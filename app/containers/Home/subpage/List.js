import React,{Component} from 'react';
import {getList} from '../../../fetch/home/home';
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/LoadMore/LoadMore";

export default class List extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true, // 是否有更多
            data:[], // 所有数据
            page:0 , // 页码
            isLoading:true  // 是否正在加载
        }
    }
    componentDidMount(){
        this.processDate(getList(this.props.cityName,0));
    }
    // 加载更多的函数传递给loadMore ，点击按钮 触发传递函数
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true, // 每次加载更多时 状态都应该为正在加载
        },()=>{ // 这个函数可以获取到最新的页码状态
            this.processDate(getList(this.props.cityName,this.state.page));
        })
    }
    // 处理成功后的逻辑
    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
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
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoader={this.state.isLoading}/>
            </div>
        )
    }
}