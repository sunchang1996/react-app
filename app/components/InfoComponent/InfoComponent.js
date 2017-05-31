import React,{Component} from 'react';
import Star from "../Star/Star";
export default class InfoComponent extends Component{
    render(){
        let {img,star,desc,title,subTitle,price} =this.props.data;
        return (
            <div>
                <div>
                    <img src={img}/>
                    <div>
                        <h3>{title}</h3>
                        <div>
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