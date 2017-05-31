import React,{Component} from 'react';
import './index.less'
export default class HeadComponent extends Component{
    render(){
        return (
            <div className="back header-component">
                    <i className="iconfont icon-fanhui" onClick={()=>this.props.history.go(-1)}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
}