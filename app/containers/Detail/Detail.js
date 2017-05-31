import React,{Component} from 'react';
import HeadComponent from "../../components/HeaderComponent/HeadComponent";
import Info from "./subpage/Info";
// 通过 路由渲染的组件都会在this.props 上增加很多属性 列:history location
export default class Detail extends Component{
    render(){
        return (
            <div>
                {/*头部*/}
                <HeadComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
            </div>
        )
    }
}