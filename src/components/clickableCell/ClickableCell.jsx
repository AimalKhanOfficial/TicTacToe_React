import React, {Component} from "react";

export default class ClickableCell extends Component {

    constructor(props){
        super(props);
        this.onCellClicked = this.onCellClicked.bind(this);
    }

    render(){
        return (
            <button onClick={this.onCellClicked}>
                {this.props.cellId}
            </button>
        );
    }

    onCellClicked(){
        this.props.onBoxClick(this.props.cellId);
    }
}