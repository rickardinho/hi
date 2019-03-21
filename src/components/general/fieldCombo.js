import React, { Component } from 'react';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import 'react-dropdown/style.css';
import 'react-select/dist/react-select.css';
import { CustomDropdown, CustomDropdownMenu, CustomDropdownToggle, CustomMenuItem } from '../../styles/dropdowns';


export default class FieldCombo extends Component {


  render () {
    const { fields, value, onSelect } = this.props;


    const dropdownValue = value;

    const options = fields.map((field) => {
      return (
        { value: field.field_name, label: field.field_name, field_id: field.field_id }
      );

    });


    // const defaultOption = options[this.props.value - 1];
    
    const menuItems = options.map((option, i) => {
        return (
          <CustomMenuItem
            key={`myMenuKey ${option.field_id}`}
            eventKey={option.field_id}
            index={i}
            onSelect={(eventKey) => { onSelect(eventKey); }}
          >
            {option.value}
          </CustomMenuItem>
        );
    });

    return (

      <CustomDropdown>
        <CustomDropdownToggle btnSize='sm' btnStyle='flat'>
          {dropdownValue}
        </CustomDropdownToggle>
        <CustomDropdownMenu>
          {menuItems}
        </CustomDropdownMenu>
      </CustomDropdown>

    );
  }
}
