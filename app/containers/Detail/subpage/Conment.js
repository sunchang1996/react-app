import React,{Component} from 'react';
import {getComment} from  '../../../fetch/detail/detail'
import Comment from "../../../components/CommentComponent/Comment";
import LoadMore from "../../../components/LoadMore/LoadMore";
export default class Conment extends Component{
    constructor(){
        super();
        this.state={
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
    }

    render(){
        return (
            <div>
                {/*评价列表*/}
                {
                    this.state.data.length?
                        <Comment data={this.state.data}/>: <div>正在加载中...</div>
                }
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    // 获取数据，默认加载第一页 下拉刷新更多
    componentWillMount(){
        this.processDate(getComment(this.props.id,0));
    }
    loadMore(){ // 用来加载更多的方法
        this.setState({
            isLoading:true,
            page:this.state.page+1,
        },()=>{
            this.processDate(getComment(this.props.id,this.state.page));
        })
    }
    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}