import React, {Component} from "react";
import './Stats.css';

export default class Stats extends Component {

    render(){
      return (
        <div className="stats_body">
            <div>
                <img className='avatar' src='./imgs/user1.png' alt='player img' /> 
                <p>Player One: <strong>{!this.props.playerOneWins ? 'X' : this.props.playerOneWins}</strong></p>
            </div>
            <div>
                <img className='avatar' src="./imgs/controller.png" alt='avatar'/> 
                <p>Ties: <strong>{!this.props.ties ? 'X' : this.props.ties}</strong></p>
            </div>
            <div>
                <img className='avatar' src='./imgs/user1.png' alt='player img' /> 
                <p>Player Two: <strong>{!this.props.playerTwoWins ? 'X' : this.props.playerTwoWins}</strong></p>
            </div>
        </div>
      );
    }
}