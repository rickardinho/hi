import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  
 render () { 
  
return (
  <div>
    <div className="modal-overlay-div" style={overlayStyle} />
    <div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick.bind(this)}>
      <div className="modal-dialog-div" style={dialogStyle} onClick={this.onDialogClick}>
        {this.props.children}
      </div>
    </div>
  </div>
);

}



 

 
