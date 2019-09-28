import React, {Component} from "react";

export default class BaseArea extends Component {
    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div>
                {
                    baseAreaCells.map((item, i) => item)
                }
            </div>
        );
    }
}