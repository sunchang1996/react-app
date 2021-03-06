import React,{Component} from 'react';
import {getAd} from  '../../../fetch/home/home';
import './Ad.less'
export default class Ad extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){

        getAd().then(res=>res.json()).then(data=>{
            this.setState({data})
        })

    }
    render(){
        return (
            <div>
                <h3>超值优惠</h3>
            <div className="ad">
                {this.state.data.length?this.state.data.map((item,index)=>(
                    <a href={item.link} key={index}>
                        <img src={item.img} title={item.title}/>
                    </a>
                )):
                    <div>正在加载中...</div>
                }
            </div>
            </div>
        )
    }
}