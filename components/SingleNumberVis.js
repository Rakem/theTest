import {Text, View} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, TEXT_COLOR} from '../Constants';
import PropTypes from 'prop-types';
import GradeEntry from './GradeEntry';

const styles = {
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR.light,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  title: {color: TEXT_COLOR, flex: 1},
  number: {color: TEXT_COLOR, flex: 1, fontWeight: 'bold', fontSize: 20},
};
function SingleNumberVis(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.number}>{props.value}</Text>
      </View>
    </View>
  );
}
SingleNumberVis.propTypes = {
  title: PropTypes.node,
  value: PropTypes.node,
  style: PropTypes.object,
};
export default SingleNumberVis;
