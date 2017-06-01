import React,{Component} from 'react';
// 路由的两种类型 HashRouter BrowserRouter
// Route 小路由
import {
    HashRouter as Router // 大路由 提供一个路由容器
    ,Route, // 单条路由
    Switch // 切换 只匹配一次
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from "../containers/Detail/Detail";
import Login from "../containers/Login";
import User from "../containers/User";
import City from "../containers/City";
import Search from '../containers/Search'
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*exact:绝对匹配 只有当路径是/的时候才匹配路由*/}
                        <Route exact path='/' component={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                        {/*点击先跳转到登录页 ， 登录后 在回到登录之前的页面，在login路径后 可能需要保持上次点击login的路径 登录过跳转到用户页*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}