import "./BaseArea.css";
import React, {Component} from "react";
import ClickableCell from "../clickableCell/ClickableCell";

const initialState = { 
    filledBoxes: [],
    playerTurnFlag: false, 
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
            <div className="base">
                {
                    baseAreaCells.filter(row => row !== undefined && Array.isArray(row)).map((baseRow, i) => 
                        <span className="stack_side_by_side" key={i}>  
                            {
                                baseRow.filter(cellItem => cellItem !==undefined).map(
                                    CellItemId => <ClickableCell onBoxClick={this.boxClicked} key={CellItemId} cellId={CellItemId}/>
                                )
                            }
                        </span>
                    )
                }
            </div>
        );
    }

    boxClicked(cellId) {
        let filledBoxes = this.state.filledBoxes;
        filledBoxes.push(cellId);
        this.setState({
            filledBoxes: filledBoxes,
            playerTurnFlag: !this.state.playerTurnFlag
        });
    }
}