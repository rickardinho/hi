/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import 'react-dropdown/style.css';
import 'react-select/dist/react-select.css';
import { T4, D4 } from '../../styles/styles';
import colours from '../../styles/colours';


export default class ComboSun extends Component {

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

  handleSelect = (currentValue, inputKey, dataType, farmKey) => {


    this.setState({ open: false });
    const { onSelect } = this.props;
    onSelect(currentValue, inputKey, dataType, farmKey);

  }


  render () {


    const { open } = this.state;


    const { value, dataType, inputKey, farmKey } = this.props;


    const dropdownValue = value;

    const options = [
      { value: 1, label: 1, icon: faWind },
      { value: 2, label: 2, icon: faWind },
      { value: 3, label: 3, icon: faWind },
      { value: 4, label: 4, icon: faWind },
      { value: 5, label: 5, icon: faWind },
      { value: 6, label: 6, icon: faWind },
      { value: 7, label: 7, icon: faWind },
      { value: 8, label: 8, icon: faWind },
      { value: 9, label: 9, icon: faWind },
      { value: 10, label: 10, icon: faWind }
    ];


    // const defaultOption = options[this.props.value - 1];

    const menuItems = options.map((option, i) => {

        const currentValue = option.value;

        return (

          <button
            type='button'
            key={`myMenuKey Wind ${option.value}`}
            eventkey={currentValue}
            index={i}
            onClick={() => this.handleSelect(currentValue, inputKey, dataType, farmKey)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.handleSelect(currentValue, inputKey, dataType, farmKey);
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              padding: 2,
              borderTop: '0 solid gray',
              borderHorizontal: '0 solid gray',
              borderBottom: '1 solid gray',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              background: colours.white,
              alignItems: 'center',
              justifyContent: 'center'
            }}


          >

            <div style={{ flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <D4>{option.value}</D4>
            </div>

            <div style={{ width: '60%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesomeIcon icon={option.icon} size='lg' style={{ color: colours.blue }} />
            </div>
          </button>

        );
    });


    return (

      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          cursor: 'pointer',
          borderWidth: 1,
          borderColor: colours.lightgray,
          borderStyle: 'solid',
          borderRadius: 3
        }}
      >
        <button

          type='button'
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          style={{
            width: '100%',
            height: '100%',
            padding: '0px',
            border: '0 solid gray',
            borderRadius: 3,
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            background: colours.white
          }}

        >

          <div style={{ width: '30%' }} />

          <div style={{ flex: 1, height: '100%', background: colours.white }}>
            <T4>{dropdownValue}</T4>
          </div>

          <div style={{ width: '30%', height: '100%' }}>
            <FontAwesomeIcon
              icon={faCaretDown}
              size='sm'
              style={{ color: colours.caretColor }} />
          </div>


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
            <div>
              {menuItems}
            </div>
          </div>
        )}

      </div>

    );
  }
}
