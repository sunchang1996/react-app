import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
// 主页头部组件
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header  back">
                <div className="city">
                {this.props.cityName}
                <i className="iconfont icon-xiangxia2"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <input type="text" placeholder="请输入搜索内容"/>
                </div>

                <Link to='/login'>
                    <div className="profile">
                        <i className="iconfont icon-yonghufill"></i>
                    </div>
                </Link>
            </div>

        )
    }
}