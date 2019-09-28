import React, {Component} from "react";

export default class BaseArea extends Component {
    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div>
                {
                    baseAreaCells.filter(row => row !== undefined && Array.isArray(row)).map((baseRow, i) => 
                        baseRow.filter(cellItem => cellItem !==undefined).map(
                            CellItemId => <span key={CellItemId}>{CellItemId}</span>
                        )
                    )
                }
            </div>
        );
    }
}