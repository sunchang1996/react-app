import React,{Component} from 'react';
import HeadComponent from "../../components/HeaderComponent/HeadComponent";
import {connect} from 'react-redux'
import CurrentCity from "../../components/CurrentCity/index";
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux'
import ChooserCity from "../../components/ChooserCity/ChooserCity";
 class City extends Component{
    render(){
        return (
            <div>
                {/*头*/}
                <HeadComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市*/}
                <ChooserCity changeCity = {this.changeCity.bind(this)}/>
            </div>
        )

    }
    changeCity(city){
        // city 代表当前选择城市组件选择后的结果
       let oldInfo= this.props.userInfo; //取出原有的数据
       oldInfo.cityName=city; // 更改成最新城市
       this.props.userActions.update(oldInfo);
       // 更改成功后，跳转首页
        this.props.history.push('/');
    }
}

export default  connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)