// 登录组件
import React,{Component} from 'react';
import './index.less'
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    render(){
        return (
            <div className="login-component">
                {/*ref 非受控  受控state*/}
                <input type="text" value={this.state.val} onChange={this.changeValue.bind(this)}/>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    login(){
        this.props.login(this.state.val);
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
}