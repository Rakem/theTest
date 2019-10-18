import {Text, TextInput} from 'react-native';
import React from 'react';
import {ACCENT_COLOR, PRIMARY_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
function CustomTextInput(props) {
  return (
    <>
      <InputAccessoryText>{props.title}</InputAccessoryText>
      <TextInput {...props} underlineColorAndroid={PRIMARY_COLOR.light} />
    </>
  );
}

export default CustomTextInput;
