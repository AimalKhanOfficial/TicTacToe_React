import React, {Component} from "react";
import ClickableCell from "../clickableCell/ClickableCell";

export default class BaseArea extends Component {
    render() {
        let baseAreaCells = this.props.baseAreaCells ? this.props.baseAreaCells : [];
        return (
            <div>
                {
                    baseAreaCells.filter(row => row !== undefined && Array.isArray(row)).map((baseRow, i) => 
                        baseRow.filter(cellItem => cellItem !==undefined).map(
                            CellItemId => <ClickableCell key={CellItemId} cellId={CellItemId}/>
                        )
                    )
                }
            </div>
        );
    }
}