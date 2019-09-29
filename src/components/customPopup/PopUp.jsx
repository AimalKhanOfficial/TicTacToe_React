import React, {Component} from "react";
import './PopUp.css';

export default class PopUp extends Component {
    render(){
      return (
        <div className='popup_body' id='popup_container' style={{display: this.props.isVisible ? 'block' : 'none'}}>
            <img className='expressionGifs' alt='Image expressions..' id='expression_image' src={this.props.imageType ? this.props.imageType : '/imgs/user1.png'}/>
            <div>
              {this.props.body}
            </div>
            <div>
              <button className="btn_close">Close</button>
            </div>
        </div>
        );
    }
}