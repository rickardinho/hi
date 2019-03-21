import styled from 'styled-components';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import Dropdown, { DropdownButton, MenuItem, DropdownMenuWrapper } from '@trendmicro/react-dropdown';
import colours from './colours';


// dropdowns


export const CustomDropdown = styled(Dropdown)`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-width: 0px;
    border-color: orange;
    border-style: solid;
`;
CustomDropdown.propTypes = Dropdown.propTypes;
CustomDropdown.defaultProps = Dropdown.defaultProps;

export const CustomDropdownMenu = styled(Dropdown.Menu)`

    width: 100%;
    border-width: 0px;
    border-color: blue;
    border-style: solid;
`;
CustomDropdownMenu.propTypes = Dropdown.Menu.propTypes;
CustomDropdownMenu.defaultProps = Dropdown.Menu.defaultProps;

export const CustomMenuItem = styled(MenuItem)`
  border-width: 0px;
  border-color: green;
  border-style: solid;
  justify-content: center;
  align-items: center;
  background: ${colours.offWhite};
  padding-left: 0px;
  

`;
CustomMenuItem.propTypes = MenuItem.propTypes;
CustomMenuItem.defaultProps = MenuItem.defaultProps;

export const CustomDropdownToggle = styled(Dropdown.Toggle)`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-width: 0px;
    border-color: red;
    border-style: solid;

`;
CustomDropdownToggle.propTypes = Dropdown.Toggle.propTypes;
CustomDropdownToggle.defaultProps = Dropdown.Toggle.defaultProps;

export const CustomDropdownMenuWrapper = styled(DropdownMenuWrapper)`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: pink;
    border-style: solid;

`;
CustomDropdownMenuWrapper.propTypes = DropdownMenuWrapper.propTypes;
CustomDropdownMenuWrapper.defaultProps = DropdownMenuWrapper.defaultProps;

export const CustomDropdownButton = styled(DropdownButton)`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: purple;
    border-style: solid;

`;
CustomDropdownButton.propTypes = DropdownButton.propTypes;
CustomDropdownButton.defaultProps = DropdownButton.defaultProps;
