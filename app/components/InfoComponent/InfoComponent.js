import React,{Component} from 'react';
import Star from "../Star/Star";
import './index.less'
export default class InfoComponent extends Component{
    render(){
        let {img,star,desc,title,subTitle,price} =this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img}/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                           <Star count={star}/>
                            <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                {/*将内容转换成HTML 插入到页面中*/}
                <div dangerouslySetInnerHTML={{__html:desc}}>
                </div>


            </div>
        )
    }
}