import React, { Component } from 'react';
import styled from 'styled-components';
import { H3 } from '../../styles/styles';
// import './Modal.css';
// import { hideModal } from '../../actions/modal';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .65);
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-color: orange;
  border-width: 2;
  border-style: solid;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -.05em;
    content: '';
    border-color: purple;
    border-width: 2;
    border-style: solid;
  }
`;


const Dialog = styled.div`
  position: relative;
  height: 90%;
  outline: 0;
  display: flex;
  cursor: default;
  background: white;
  flex-direction: column;
  margin: 5%;
  border-color: pink;
  border-width: 2;
  border-style: solid;
`;

const Header = styled.div`
  padding: 8px 8px 8px 8px;
  border-color: brown;
  border-width: 2;
  border-style: solid;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  right: 0;
  left: 0;
  flex: 8;
  border-color: green;
  border-width: 2;
  border-style: solid;

`;

export default class Modal extends Component {

  // static propTypes = {
  //   children: PropTypes.node,
  //   title: PropTypes.string,
  //   onClose: PropTypes.func
  // };

  componentDidMount () {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount () {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }

  onOverlayClick = () => {
    this.props.onClose();
  };

  onDialogClick = (event) => {
    event.stopPropagation();
  };

  get title () {
    const { title } = this.props;

    return title ? (
      <div className='modal__title'>
        <H3>{title}</H3>
      </div>
    ) : null;
  }

  get close () {
    const { onClose } = this.props;

    return onClose ? (
      <div className='modal__close' onClick={onClose} />
    ) : null;
  }

  listenKeyboard = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  };


  render () {
    return (
      <div className='modal'>
        <Overlay />
        <Content onClick={this.onOverlayClick}>
          <Dialog onClick={this.onDialogClick}>
            <Header>
              {this.title}
              {this.close}
            </Header>
            <Body>
              {this.props.children}
            </Body>
          </Dialog>
        </Content>
      </div>
    );
  }
}
