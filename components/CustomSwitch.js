import {Text, Switch} from 'react-native';
import React from 'react';
import {ACCENT_COLOR, PRIMARY_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
import PropTypes from 'prop-types';
function CustomSwitch(props) {
  return (
    <>
      <InputAccessoryText>{props.title}</InputAccessoryText>
      <Switch {...props} />
    </>
  );
}

CustomSwitch.propTypes = {
  title: PropTypes.string,
};
export default CustomSwitch;
