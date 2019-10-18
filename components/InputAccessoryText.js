import {Text, Switch} from 'react-native';
import React from 'react';
import {ACCENT_COLOR, TEXT_COLOR_DARK} from '../Constants';

const styles = {
  text: {
    color: TEXT_COLOR_DARK,
    fontSize: 11,
  },
}

function InputAccessoryText(props) {
  return <Text style={styles.text}>{props.children}:</Text>;
}

export default InputAccessoryText;
