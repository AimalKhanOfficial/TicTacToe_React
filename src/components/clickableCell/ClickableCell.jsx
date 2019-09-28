import "./ClickableCell.css";
import React, {Component} from "react";

export default class ClickableCell extends Component {

    constructor(props){
        super(props);
        this.onCellClicked = this.onCellClicked.bind(this);
    }

    render(){
        let boxesToSearch = this.props.boxesToFill ? this.props.boxesToFill : [];
        let wasBoxFilled = boxesToSearch.find(elem => elem.cellId === this.props.cellId ? elem : undefined);
        return (
            <button onClick={this.onCellClicked} className="cell_layout">
                {wasBoxFilled !== undefined ? !wasBoxFilled.playerFlag ? "X" : "O" : ""}
            </button>
        );
    }

    onCellClicked(){
        this.props.onBoxClick(this.props.cellId);
    }
}