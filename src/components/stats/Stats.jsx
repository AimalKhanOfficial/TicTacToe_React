import React, {Component} from "react";

export default class Stats extends Component {

    render(){
      return (
        <div>
            <div>
              <p>Player One: <strong>{this.props.playerOneWins}</strong></p>
            </div>
            <div>
              <p>Ties: <strong>{this.props.ties}</strong></p>
            </div>
            <div>
              <p>Player Two: <strong>{this.props.playerTwoWins}</strong></p>
            </div>
        </div>
      );
    }
}