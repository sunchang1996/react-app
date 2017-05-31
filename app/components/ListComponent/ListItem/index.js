import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'; // Link组件主要用于跳转路径 必须要有to 属性
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,distance,price,number,id} = this.props.data;

        return (
            <Link to={'/detail/'+id}>
            <div>
               <div className="list-item">
                   <img src={img}/>
                   <div className="list-item-content">
                        <h3>{title}</h3>
                       <p>{subTitle}</p>
                       <div>
                           <strong>￥{price}</strong>
                           <span>已售{number}</span>
                       </div>
                       <span className="distance">{distance} m</span>
                   </div>
               </div>
            </div>
            </Link>
        )
    }
}