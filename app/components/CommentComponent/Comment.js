import React,{Component} from 'react';
import CommentItem from "./CommentItem/index";
export default class Comment extends Component{
    render(){
        return (
            <div>
                {this.props.data.map((item,index)=>(
                    <CommentItem data={item} key={index}/>
                ))}
            </div>
        )
    }
}