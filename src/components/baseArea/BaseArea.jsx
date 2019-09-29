import "./BaseArea.css";
import React, {Component} from "react";
import ClickableCell from "../clickableCell/ClickableCell";
import { checkResult } from "../../Helpers/Utilities";
import Stats from "../stats/Stats";
import PopUp from "../customPopup/PopUp";

const initialState = { 
    filledBoxes: [],
    playerTurnFlag: false, 
    isGameFinished: false,
    isGameTied: false,
    isPopUpVisible: false,
    popUpBodyText: "",
    popUpImage: "",
    playerOneWins: 0, 
    playerTwoWins: 0, 
    ties: 0
}

export default class BaseArea extends Component {

    constructor(){
        super();
        this.state = initialState;
        this.boxClicked = this.boxClicked.bind(this);
        this.undoMove = this.undoMove.bind(this);
        this.setGameDefaults = this.setGameDefaults.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.displayPopUp = this.displayPopUp.bind(this);
    }

    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div className="base" style={!this.state.playerTurnFlag ? {backgroundColor: '#f8fde7'} : {backgroundColor: '#ffedcc'}}>
                <div className="stack_side_by_side">          
                    <img src="/imgs/refresh.png" alt="avatar" id="undoMoveId" className="avatar" title="Undo move" onClick={this.undoMove}/>
                    <img src="/imgs/restart.png" alt="avatar" id="gameDefaultsId" className="avatar" title="Start Over" onClick={this.setGameDefaults}/>
                </div>
                <br/>
                <PopUp imageType={this.state.popUpImage} isVisible={this.state.isPopUpVisible} closePopUp={this.closePopUp} body={this.state.popUpBodyText}/>
                <h3>
                    {!this.state.isGameFinished ? (!this.state.playerTurnFlag ? "Player 1 to play.." : "Player 2 to play..")  : "Game Over!"}
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
                <Stats playerOneWins={this.state.playerOneWins} playerTwoWins={this.state.playerTwoWins} ties={this.state.ties}/>
            </div>
        );
    }

    displayPopUp(bodyText, popUpImage) {
        this.setState({
            isPopUpVisible: true,
            popUpImage: popUpImage,
            popUpBodyText: bodyText
        });
    }

    closePopUp() {
        this.setState({
          isPopUpVisible: false
        });
    }

    setGameDefaults() {
        this.setState({
            filledBoxes: [],
            playerTurnFlag: false, 
            isGameFinished: false,
            isGameTied: false,
            isPopUpVisible: false,
            popUpBodyText: "",
            popUpImage: "",
        });
    }

    undoMove(){
        if(!this.state.isGameFinished && !this.state.isGameTied){
            let allMoves = this.state.filledBoxes;
            if(allMoves.length > 0){
              allMoves.pop();
              this.setState({
                playerTurnFlag: !this.state.playerTurnFlag,
                filledBoxes: allMoves
              });
            }
          }
    }

    boxClicked(cellId) {
        let filledBoxes = this.state.filledBoxes;
        if (this.state.isGameFinished) {
            return false;
        }
        else if(filledBoxes.find(a => a.cellId === cellId)){
            return false;
        }
        else {
            filledBoxes.push({
                cellId: cellId,
                playerFlag: this.state.playerTurnFlag
            });
            this.setState({
                filledBoxes: filledBoxes,
                isGameFinished: checkResult(this.state.filledBoxes, this.state.playerTurnFlag, this.props.winningPatterns)
              }, () => {
                if(this.state.isGameFinished) {
                    this.setState({
                        playerOneWins: !this.state.playerTurnFlag ? (this.state.playerOneWins + 1) : this.state.playerOneWins, 
                        playerTwoWins: this.state.playerTurnFlag ? (this.state.playerTwoWins + 1) : this.state.playerTwoWins 
                    });
                }
                else {
                    if(this.state.filledBoxes.length === 9) {
                        this.setState({
							isGameTied: true,
							ties: this.state.ties + 1
						});
                    }
                    this.setState({
                      playerTurnFlag: !this.state.playerTurnFlag,
                    });
                }
            });
        }
    }
}