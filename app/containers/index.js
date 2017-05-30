import React,{Component} from 'react';
import RouterMap from  '../routes/index';
import {connect} from 'react-redux';
// 绑定actionCreator 组成的对象
import {bindActionCreators} from 'redux';
// 获取所有 actionCreator 组成的对象
import * as Actions from  '../actions/userInfo';
 class App extends Component{
    constructor(props){
        super();
        this.state={
            done:false
        }
    }
    componentDidMount(){
        // 先去本地查找 是否存储过localstorage 名字 叫 cityName的
        this.setState({
            done:true
        });
        console.log(this.props.userActions);
    }
    render(){
        return (
            <div>
                {/*如果当路径为/ RouterMap 就会变成为Home组件*/}
                {this.state.done?<RouterMap/>: <div>正在加载中...</div>}
            </div>
        )
    }
}
export  default connect(
    state =>{ // mapStateToProps
        return {}
    },
    dispatch=>{// mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)