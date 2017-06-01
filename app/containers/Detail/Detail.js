import React,{Component} from 'react';
import HeadComponent from "../../components/HeaderComponent/HeadComponent";
import Info from "./subpage/Info";
import Conment from "./subpage/Conment";
import Buy from "../../components/Buy/Buy";
import {connect} from 'react-redux'
import * as Actions from '../../actions/store';
import {bindActionCreators} from 'redux';
// 通过 路由渲染的组件都会在this.props 上增加很多属性 列:history location

class Detail extends Component{
    constructor(){
        super();
        this.state={
            isStore:false
        }
    }
    render(){
        return (
            <div>
                {/*头部*/}
                <HeadComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy isStore={this.state.isStore} buy={this.buy.bind(this)} store={this.store.bind(this)}/>
                {/*评论*/}
                <Conment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        // 先从redux 中获取所有的收藏列表[], 有显示已收藏 没有未收藏
        //1. 拿到当前商户的id
        let id = this.props.match.params.id;
        // 2. 去收藏的数组中查询
        //some  方法
        let flag = this.props.store.some(item=>item === id);
        if(flag) this.setState({isStore:flag});
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
        let flag = this.checkLogin();
        if(!flag){ // 如果没有登录 则跳转到登录页
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
        let id = this.props.match.params.id;
        if(this.state.isStore){
            // 在store中移除
            this.props.storeActions.remove(id)
        }else {
            //添加到store 中
            this.props.storeActions.add(id)
        }
        this.setState({
            isStore:!this.state.isStore
        })
    }
}
export  default connect(
    state=>{
        return {userInfo:state.userInfo,
            store:state.store  // 这里收藏的是
        }
    },
    despatch=>{
        return {
            storeActions:bindActionCreators(Actions,despatch)
        }
    }
)(Detail)