import React,{Component} from 'react';
import HeadComponent from "../../components/HeaderComponent/HeadComponent";
import Info from "./subpage/Info";
import Conment from "./subpage/Conment";
import Buy from "../../components/Buy/Buy";
import {connect} from 'react-redux'
// 通过 路由渲染的组件都会在this.props 上增加很多属性 列:history location

class Detail extends Component{
    render(){
        return (
            <div>
                {/*头部*/}
                <HeadComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)}/>
                {/*评论*/}
                <Conment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        // 先从redux 中获取所有的收藏列表[], 有显示已收藏 没有未收藏
    }
    checkLogin(){
        // 检测是否登录过 登录返回true 否则返回false
        if(this.props.userInfo.username){
            return true;
        }
        return false;
    }
    buy() { // 购买
        // 如果登录成功点击购买
        let flag = this.checkLogin();
        if(flag){
            this.props.history.push('/user');
        }else {
            //如果登录成功后，还要跳回当前页
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
    }
    store(){ // 收藏
        // 验证是否登录 ，如果没有登录就去登录，登录成功跳回详情
    }
}
export  default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(Detail)