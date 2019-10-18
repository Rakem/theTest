import {Text, TextInput} from 'react-native';
import React from 'react';
import {FAIL_COLOR, PRIMARY_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
import PropTypes from 'prop-types';
import CustomSwitch from './CustomSwitch';
const styles = {
  errorText: {
    fontSize: 11,
    color: FAIL_COLOR.main,
    marginLeft:3,
  },
};
function CustomTextInput(props) {
  return (
    <>
      <InputAccessoryText>{props.title}</InputAccessoryText>
      <TextInput {...props} underlineColorAndroid={PRIMARY_COLOR.light} />
      {!!props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </>
  );
}
CustomTextInput.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
};
export default CustomTextInput;
