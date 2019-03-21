import React from 'react';
import InputField from '../general/inputField';
// import styles from '../../../styles';
import { GeneralText } from '../../styles/text';

export function FormTextInput ({
  labelText,
  focussedColor,
  unfocussedColor,
  placeholder,
  isEmail,
  iconName,
  input: { value, onChange, onBlur },
  meta: { touched, error } }) {

  console.log('touched: ', touched);
  console.log('error: ', error);

  return (
    <div style={{ alignItems: 'center' }}>

      <InputField
        placeholder={ placeholder }
        autoCorrect={ false }
        autoCapitalize={ isEmail ? 'none' : 'words' }
        onChangeText={ text => onChange(text) }
        onBlur={ text => onBlur(text) }
        value={ value }
        type='text'
        labelType='notPoll'
        label={ labelText }
        iconName={ iconName }
        // inputKey= { inputKey }
        // onChangeText={ text => handleChange(text, inputKey) }
        focussedColor={ focussedColor }
        unfocussedColor={ unfocussedColor }
      />


      {
        touched && error && <GeneralText style={{ height: 25, color: 'red', fontSize: 16, marginVertical: 2 }}>{error}</GeneralText>
      }
    </div>
  );
}

export function FormPasswordInput ({ labelText, focussedColor, unfocussedColor, iconName, placeholder, input: { value, onChange, onBlur }, meta: { touched, error } }) { // eslint-disable-line max-len
  return (
    <div style={{ alignItems: 'center' }}>
      <InputField
        // testDescription={testDescription}
        underlineColorAndroid='transparent'
        placeholder={ placeholder }
        autoCorrect={ false }
        autoCapitalize='none'
        onChangeText={ text => onChange(text) }
        onBlur={ text => onBlur(text) }
        value={ value }
        type='password'
        labelType='notPoll'
        label={ labelText }
        iconName={ iconName }
        // inputKey= { inputKey }
        // onChangeText={ text => handleChange(text, inputKey) }
        focussedColor={ focussedColor }
        unfocussedColor={ unfocussedColor }
        secureTextEntry
      />


      {
        touched && error && <GeneralText style={{ color: '#ec3811', fontSize: 16, marginVertical: 2 }}>{error}</GeneralText>
      }
    </div>
  );
}
