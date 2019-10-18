import {Text, Switch} from 'react-native';
import React from 'react';
import {ACCENT_COLOR} from '../Constants';

const styles = {
  text: {
    color: '#8b95a6',
    fontSize: 11,
  },
}

function InputAccessoryText(props) {
  return <Text style={styles.text}>{props.children}:</Text>;
}

export default InputAccessoryText;
