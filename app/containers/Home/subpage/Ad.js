import React,{Component} from 'react';
import {getAd} from  '../../../fetch/home/home'
export default class Ad extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){

        getAd().then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({data})
        })

    }
    render(){
        return (
            <div>
                {/*{this.state.data}*/}
            </div>
        )
    }
}