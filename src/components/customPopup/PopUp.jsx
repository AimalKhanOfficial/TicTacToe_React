import React, {Component} from "react";
import './PopUp.css';

export default class PopUp extends Component {
    render(){
      return (
        <div className="popup_body" id="popup_container" style={{display: this.props.isVisible ? "block" : "none"}}>
            <div>
                Example Text
            </div>
            <div>
              <button className="btn_close">Close</button>
            </div>
        </div>
        );
    }
}