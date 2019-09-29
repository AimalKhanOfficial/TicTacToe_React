import "./BaseArea.css";
import React, {Component} from "react";
import ClickableCell from "../clickableCell/ClickableCell";
import checkResult from "../../Helpers/Utilities";

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
        this.setGameDefaults = this.setGameDefaults.bind(this);
    }

    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div className="base">
                <div className="stack_side_by_side">          
                    <img src="/imgs/refresh.png" alt="avatar" id="undoMoveId" className="avatar" title="Undo move" onClick={this.undoMove}/>
                    <img src="/imgs/restart.png" alt="avatar" id="gameDefaultsId" className="avatar" title="Start Over" onClick={this.setGameDefaults}/>
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

    setGameDefaults() {
        this.setState({
            filledBoxes: [],
            playerTurnFlag: false, 
        });
    }

    undoMove(){
        let allMoves = this.state.filledBoxes;
        if(allMoves.length > 0){
            allMoves.pop();
            this.setState({
                playerTurnFlag: !this.state.playerTurnFlag,
                filledBoxes: allMoves
            });
        }
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
        checkResult(filledBoxes, this.state.playerTurnFlag, this.props.winningPatterns);
    }
}