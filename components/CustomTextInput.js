import {Text, TextInput} from 'react-native';
import React from 'react';
import {ACCENT_COLOR, PRIMARY_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
import PropTypes from 'prop-types';
import CustomSwitch from './CustomSwitch';
function CustomTextInput(props) {
  return (
    <>
      <InputAccessoryText>{props.title}</InputAccessoryText>
      <TextInput {...props} underlineColorAndroid={PRIMARY_COLOR.light} />
    </>
  );
}
CustomTextInput.propTypes = {
  title: PropTypes.string,
};
export default CustomTextInput;
