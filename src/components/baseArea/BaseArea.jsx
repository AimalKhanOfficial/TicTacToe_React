import React, {Component} from "react";

export default class BaseArea extends Component {
    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div>
                {
                    baseAreaCells.map((BaseRow, i) => BaseRow.map(CellItemId => <span key={CellItemId}>{CellItemId}</span>))
                }
            </div>
        );
    }
}