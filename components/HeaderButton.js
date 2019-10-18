import {Text, Switch, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TEXT_COLOR} from '../Constants';
import PropTypes from 'prop-types';
import CustomSwitch from './CustomSwitch';

const styles = {
  container: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  text: {
    color: TEXT_COLOR,
  },
};
function HeaderButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

HeaderButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
export default HeaderButton;
