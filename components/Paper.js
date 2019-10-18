import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 1,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },
});

function Paper({children, style}) {
  return (
    <View style={[styles.container,style]}>
      {children}
    </View>
  );
}

Paper.propTypes = {
  children: PropTypes.node,
}

export default Paper;
