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
        this.undoMove = this.undoMove.bind(this);
    }

    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div className="base">
                <div className="stack_side_by_side">          
                    <img src="/imgs/refresh.png" alt="avatar" className="avatar" title="Undo move" onClick={this.undoMove}/>
                </div>
                <br/>
                <h3>
                    {!this.state.playerTurnFlag ? "Player 1 to play.." : "Player 2 to play.."}
                </h3>
                {
                    baseAreaCells.filter(row => row !== undefined && Array.isArray(row)).map((baseRow, i) => 
                        <span className="stack_side_by_side" key={i}>  
                            {
                                baseRow.filter(cellItem => cellItem !==undefined).map(
                                    CellItemId => <ClickableCell boxesToFill={this.state.filledBoxes} playerFlag={this.state.playerTurnFlag} onBoxClick={this.boxClicked} key={CellItemId} cellId={CellItemId}/>
                                )
                            }
                        </span>
                    )
                }
            </div>
        );
    }

    undoMove(){
    }

    boxClicked(cellId) {
        let filledBoxes = this.state.filledBoxes;
        filledBoxes.push({
            cellId: cellId,
            playerFlag: this.state.playerTurnFlag
        });
        this.setState({
            filledBoxes: filledBoxes,
            playerTurnFlag: !this.state.playerTurnFlag
        });
    }
}