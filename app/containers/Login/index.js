import React, {Component} from 'react';
import HeadComponent from "../../components/HeaderComponent/HeadComponent";
import {connect} from 'react-redux'
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux' ;
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: false // 默认是没有登录 不显示登录组件
        }
    }

    render() {
        return (
            <div>
                <HeadComponent title="登录" history={this.props.history}/>
                {/*如果登录过 显示登录组件 ，否则不显示跳转用户页面*/}
                {this.state.login ? <LoginComponent login={this.login.bind(this)}/> : <div></div>}
            </div>
        )
    }

    // 写一个方法 ，这个方法是登录的 ，将用户名存入redux里
    login(username) {
        let info = this.props.userInfo;
        info.username = username;
        this.props.userActions.update(info); // 跟新redux中的state(状态)

        // 如果从购买进入需要在跳回购买页
        if(this.props.match.params.route){
            // 提交到login的路径 肯定是通过 encode 转化后的跳转 是需要转码的
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else {
            //如果没有指定跳回那个也  默认回到用户页
            this.props.history.push('/user');
        }
    }

    componentDidMount() {
        this.checkLogin();
    }

    checkLogin() { // 检查是否登录 ，在redux 中 state.userInfo 是否有username, 有则登录过
        if (this.props.userInfo.username) {
            this.props.history.push('/user'); // 跳转到push
        }
        this.setState({
            login: true,  // 显示登录页面
        })
    }
}
export default connect(
    state => {
        return {userInfo: state.userInfo}
    },
    dispatch => {
        return {
            userActions: bindActionCreators(Actions, dispatch)
        }
    }
)(Login)