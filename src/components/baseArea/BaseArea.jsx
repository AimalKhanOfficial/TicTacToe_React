import React, {Component} from "react";

export default class BaseArea extends Component {
    render() {
        return (
            <div>
                {this.props.baseAreaCells}
            </div>
        );
    }
}