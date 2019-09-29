import React, {Component} from "react";
import './PopUp.css';

export default class PopUp extends Component {

    constructor(props){
        super(props);
        this.closePopUp = this.closePopUp.bind(this);
    }    

    render(){
      return (
        <div className='popup_body' id='popup_container' style={{display: this.props.isVisible ? 'block' : 'none'}}>
            <img className='expressionGifs' alt='Image expressions..' id='expression_image' src={this.props.imageType ? this.props.imageType : './imgs/user1.png'}/>
            <div>
              {this.props.body}
            </div>
            <div>
              <button className="btn_close" onClick={this.closePopUp}>Close</button>
            </div>
        </div>
        );
    }

    closePopUp() {
        this.props.closePopUp();
    }
}