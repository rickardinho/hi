/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import 'react-dropdown/style.css';
import 'react-select/dist/react-select.css';
import { Column, Row } from '../../styles/styles';
import { T4, D4 } from '../../styles/text';
import colours from '../../styles/colours';


export default class DropdownMenuValue extends Component {

  state = {
    open: false
  }

  // componentWillMount () {
  //   document.addEventListener('mousedown', this.handleClick, false);
  // }
  //
  // componentWillUnmount () {
  //   document.removeEventListener('mousedown', this.handleClick, false);
  // }


  handleClick = () => {

      // if click is inside, do something
      const { open } = this.state;
      this.setState({ open: !open });

  }

  handleOutsideClick = () => {

      // if click is inside, do something
      this.setState({ open: false });

  }

  handleSelect = (currentValue, inputKey, dataType) => {

    this.setState({ open: false });
    const { onSelect } = this.props;
    onSelect(currentValue, inputKey, dataType);

  }


  render () {


    const { open } = this.state;


    const { value, dataType, inputKey, options } = this.props;
    console.log('options', options);


    const dropdownValue = value;
    console.log('options: ', options);

    // const defaultOption = options[this.props.value - 1];

    const menuItems = options.map((option, i) => {

        const currentValue = option.value;
        console.log('option', option);

        return (

          <button
            type='button'
            key={`myMenuKey Sun ${option.value}`}
            eventkey={currentValue}
            index={i}
            onClick={() => this.handleSelect(currentValue, inputKey, dataType)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.handleSelect(currentValue, inputKey, dataType);
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              padding: 2,
              borderWidth: 0,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: colours.lightgray,
              borderStyle: 'solid',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              background: colours.white,
              alignItems: 'center',
              justifyContent: 'center'
            }}


          >

            <div style={{ flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              {
                option.value
                && <D4>{option.value}</D4>
              }
              {
                !option.value
                && option
              }
            </div>


          </button>

        );
    });

    return (

      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: 3,
          position: 'relative',
          cursor: 'pointer',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderColor: colours.lightgray,
          borderStyle: 'solid',
          borderRadius: 0,
          background: colours.white
        }}
      >
        <button

          type='button'
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          style={{

            minWidth: 40,
            padding: 0,
            margin: 0,
            border: 'none',
            borderRadius: 0,
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            backgroundColor: colours.white,
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'
          }}

        >

          <Row style={{ flex: 1, borderColor: colours.lightgray, borderStyle: 'solid', borderWidth: 1 }}>

            <div style={{ width: '0%', height: '100%' }} />

            <div style={{ flex: 1, paddingLeft: 2, paddingRight: 2 }}>
              <T4>{dropdownValue}</T4>
            </div>

            <Column style={{ background: colours.white }}>
              <div style={{ width: 30, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size='sm'
                  style={{ height: '100%', color: colours.caretColor }} />
              </div>
            </Column>

          </Row>

        </button>
        {(open
          && <div

            style={{
              opacity: 1,
              position: 'absolute',
              top: 25, // same as your nav height
              left: 0,
              background: '#ededed',
              border: '1 solid blue',
              padding: 0,
              margin: 0,
              textAlign: 'center',
              transition: 'all 1000 ease',
              zIndex: 2,
              width: '100%'
            }}
          >
            <div
              role='presentation'
              onClick={this.handleOutsideClick}
              onKeyDown={this.handleOutsideClick}
              style={{
                position: 'fixed',
                opacity: 0.2,
                background: colours.lightgray,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }} />
            <div style={{ boxShadow: '1px 1px 15px' }}>
              {menuItems}
            </div>
          </div>
        )}

      </div>

    );
  }
}
