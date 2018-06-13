import React, { Component } from 'react';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import Select from 'react-select';
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import 'react-dropdown/style.css';
import 'react-select/dist/react-select.css';
import { CustomDropdownMenu, CustomDropdownToggle, CustomMenuItem } from './../../styles/styles';


export default class Combo extends Component {

  render() {

    const options = [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
      { value: 8, label: 8 },
      { value: 9, label: 9 },
      { value: 10, label: 10 }
    ];
    const defaultOption = options[this.props.value - 1];

    let menuItems = options.map((option, i) => {
        return (
            <CustomMenuItem eventKey={ i }>{option.value}</CustomMenuItem>
        );
    });

    return (

      <Dropdown>
        <CustomDropdownToggle btnSize="sm" btnStyle="flat">
            -
        </CustomDropdownToggle>
        <CustomDropdownMenu>
            {menuItems}
        </CustomDropdownMenu>
      </Dropdown>



    );
  }
}
