import {Text, View} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, TEXT_COLOR} from '../Constants';

const styles = {
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR.light,
    justifyContent: 'center',
    flexDirection:'row',

  },
  title: {color: TEXT_COLOR, flex: 1,},
  number: {color: TEXT_COLOR, flex: 1, fontWeight:'bold', fontSize:20},
  inner:{
    height:60,
  }
};
function SingleNumberVis(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inner}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.number}>{props.value}</Text>
      </View>
    </View>
  );
}

export default SingleNumberVis;
