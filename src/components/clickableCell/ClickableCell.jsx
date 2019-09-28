import React, {Component} from "react";

export default class ClickableCell extends Component {
    render(){
        return (
            <div>
                {this.props.cellId}
            </div>
        );
    }
}