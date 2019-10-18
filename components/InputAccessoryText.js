import {Text, Switch} from 'react-native';
import React from 'react';
import { TEXT_COLOR_DARK} from '../Constants';
import PropTypes from 'prop-types';

const styles = {
  text: {
    color: TEXT_COLOR_DARK,
    fontSize: 11,
  },
}

function InputAccessoryText(props) {
  return <Text style={styles.text}>{props.children}:</Text>;
}

InputAccessoryText.propTypes = {
  children: PropTypes.node,
};

export default InputAccessoryText;
