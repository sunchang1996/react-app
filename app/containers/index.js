import React,{Component} from 'react';
import RouterMap from  '../routes/index';
export default class App extends Component{
    constructor(props){
        super();
        this.state={
            done:false
        }
    }
    componentDidMount(){
        this.setState({
            done:true
        })
    }
    render(){
        return (
            <div>
                {/*如果当路径为/ RouterMap 就会变成为Home组件*/}
                {this.state.done?<RouterMap/>: <div>正在加载中...</div>}
            </div>
        )
    }
}