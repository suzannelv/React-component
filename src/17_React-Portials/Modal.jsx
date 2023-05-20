
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends Component {


  render() {
    return createPortal(this.props.children, document.querySelector('#modal'))
  }
}

export default Modal