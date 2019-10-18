import {Text, Switch} from 'react-native';
import React from 'react';
import {ACCENT_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
function CustomSwitch(props) {
  return (
    <>
      <InputAccessoryText>{props.title}</InputAccessoryText>
      <Switch {...props} />
    </>
  );
}

export default CustomSwitch;
