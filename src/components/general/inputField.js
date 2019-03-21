import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import colours from '../../styles/colours';
import { ms14, FormLabelText } from '../../styles/text';
import { Input } from '../../styles/styles';
import { iconScale } from '../../styles/scaling';



class InputField extends Component {

  constructor (props) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  render () {

    const {
      multiline, numberOfLines, labelType, value, placeholder,
      onChangeText, testDescription, label, inputKey, optional,
      autoCapitalize, secureTextEntry, type
    } = this.props;
    // const focusedColor = !focussedColor ? colours.main : focussedColor;
    // const unfocusedColor = !unfocussedColor ? colours.lightgray : unfocussedColor;
    console.log('labelType', labelType);
    // console.log('this.props', this.props);

    const labelText = label;

    return (
      <div
        style={{ flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10

      }}>
        <div style={{

          flexDirection: 'column',
          alignItems: 'center'
        }}>
          { (label !== undefined)
            && <div style={{ flexDirection: 'row' }}>
              {
                <FormLabelText>
                  {labelText}
                </FormLabelText>
              }
              { optional
                && <FormLabelText style={{ color: colours.gray }}>
                  {' - Optional'}
                </FormLabelText>
              }
            </div>
          }
          <div style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <div style={{ flex: 1, borderColor: colours.lightgray, borderWidth: 1, borderStyle: 'solid' }}>
              <Input
                key={inputKey}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                accessibilityLabel={testDescription}
                underlineColorAndroid='transparent'
                placeholder={ placeholder }
                onChange={onChangeText}
                value={ value }
                onInput={onChangeText}
                autoCapitalize={autoCapitalize}
                style={[{
                }]}
                type={type}
                multiline={multiline}
                numberOfLines={numberOfLines} // check if does anything on android, else delete
                secureTextEntry={secureTextEntry}
              />
            </div>

          </div>
        </div>

      </div>


    );
  }
}

export default InputField;
