import React,{Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
// import  a  {}
//
export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader value={this.props.match.params.keyword||''}
                    history={this.props.history}
                />
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
}