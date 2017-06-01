import React,{Component} from 'react';
import {getOrderList,postComment} from  '../../../fetch/orderList'
import OrderListComponent from "../../../components/OrderListComponent";
export default class OrderList  extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length? <OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>: <div>加载中...</div>
                }
            </div>
        )
    }

    // 提交评价内容到后台
    commitComment(id,comment,callback){ //内容 商户 id callback 更改评价状态

        postComment({id,comment}).then(res=>res.json()).then(data=>callback())
    }

    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}