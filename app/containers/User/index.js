import React,{Component} from 'react';
import HeadComponent from "../../components/HeaderComponent/HeadComponent";
import {connect} from  'react-redux';
import UserInfo from "../../components/UserInfo/UserInfo";
class User extends Component{
    render(){
        return (
            <div>
                {/*跳转后 会回到登录页，检查是否登录，会再次跳转回来 指定返回的页面*/}
                <HeadComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(User)