/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import 'react-dropdown/style.css';
import 'react-select/dist/react-select.css';
import history from '../Navigation/history';
import { MenuButton, DropDownButton, Row } from '../../styles/styles';
import { T4, D4 } from '../../styles/text';
import colours from '../../styles/colours';


export default class DropdownPoints extends Component {

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

  handleSelect = (route) => {

    this.setState({ open: false });
    history.push(route);

  }


  render () {


    const { open } = this.state;


    const { value, options } = this.props;
    console.log('options', options);


    const dropdownValue = value;
    console.log('options: ', options);

    // const defaultOption = options[this.props.value - 1];

    const menuItems = options.map((option, i) => {

        const currentValue = option.value;

        console.log('option', option);

        return (

          <MenuButton
            type='button'
            key={`myDropdownKey ${option.text}`}
            eventkey={currentValue}
            index={i}
            onClick={() => this.handleSelect(option.route)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.handleSelect(option.route);
              }
            }}

          >

            <Row style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderStyle: 'solid', borderColor: colours.lightgray, flex: 1, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
              <div style={{ width: '75%' }}>
                {
                  option.text
                  && <D4 style={{ paddingLeft: 4, textAlign: 'left' }}>{option.text}</D4>
                }
              </div>
              <div style={{ width: '25%', display: 'flex', flexDirection: 'row' }}>
                {
                  option.points
                  && <D4 style={{ color: colours.red }}>{option.points}</D4>
                }
                {
                  option.unit
                  && <D4>&nbsp;{option.unit}</D4>
                }
                {
                  option.progress
                  && <D4>&nbsp;{option.progress}</D4>
                }
              </div>
            </Row>


          </MenuButton>

        );
    });

    return (

      <div
        style={{
          flex: 1,
          display: 'flex',
          position: 'relative',
          cursor: 'pointer',
          borderWidth: 0,
          borderColor: colours.lightgray,
          borderStyle: 'solid',
          borderRadius: 0,
          height: '100%'
        }}
      >
        <DropDownButton

          type='button'
          onClick={this.handleClick}
          onKeyDown={this.handleClick}

        >

          <div style={{ width: '30%', padding: 2 }} />


          <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'row' }}>
            <T4 style={{ color: colours.red }}>{dropdownValue}</T4><T4>&nbsp;SP</T4>
          </div>

          <div style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon
              icon={faCaretDown}
              size='sm'
              style={{ color: colours.caretColor }} />
          </div>


        </DropDownButton>
        {(open
          && <div

            style={{
              opacity: 1,
              position: 'absolute',
              top: 60, // same as your nav height
              right: 0,
              background: '#ededed',
              border: '1 solid blue',
              padding: 0,
              margin: 0,
              textAlign: 'center',
              transition: 'all 1000 ease',
              zIndex: 2,
              width: 270
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
