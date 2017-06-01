import React,{Component} from 'react';
import './index.less'
export default class HeadComponent extends Component{
    render(){
        return (
            <div className="back header-component">
                    <i className="iconfont icon-fanhui" onClick={()=>{this.back()}}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
    back(){
        if(this.props.back){ //手动跳转到 返回的路径
            this.props.history.push(this.props.back);
        }else {
            this.props.history.go(-1)
        }
    }
}