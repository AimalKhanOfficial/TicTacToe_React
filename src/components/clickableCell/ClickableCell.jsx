import React, {Component} from "react";

export default class ClickableCell extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <button onClick={this.onCellClicked}>
                {this.props.cellId}
            </button>
        );
    }
}