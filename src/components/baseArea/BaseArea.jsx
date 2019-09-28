import React, {Component} from "react";
import ClickableCell from "../clickableCell/ClickableCell";

const initialState = { 
    filledBoxes: []
}

export default class BaseArea extends Component {

    constructor(){
        super();
        this.state = initialState;
        this.boxClicked = this.boxClicked.bind(this);
    }

    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div>
                {
                    baseAreaCells.filter(row => row !== undefined && Array.isArray(row)).map((baseRow, i) => 
                        baseRow.filter(cellItem => cellItem !==undefined).map(
                            CellItemId => <ClickableCell onBoxClick={this.boxClicked} key={CellItemId} cellId={CellItemId}/>
                        )
                    )
                }
            </div>
        );
    }

    boxClicked(cellId) {
        let filledBoxes = this.state.filledBoxes;
        filledBoxes.push(cellId);
        this.setState({
            filledBoxes: filledBoxes
        });
    }
}