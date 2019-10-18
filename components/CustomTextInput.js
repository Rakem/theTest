import {Text, TextInput} from 'react-native';
import React from 'react';
import {ACCENT_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
function CustomTextInput(props) {
  return (
    <>
      <InputAccessoryText>{props.title}</InputAccessoryText>
      <TextInput {...props} underlineColorAndroid={ACCENT_COLOR} />
    </>
  );
}

export default CustomTextInput;
