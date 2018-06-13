import React, { Component } from 'react';
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-select/dist/react-select.css';

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

    return (
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="-" />

    );
  }
}
