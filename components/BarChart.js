import {Text, View} from 'react-native';
import React from 'react';
import {ACCENT_COLOR, PRIMARY_COLOR, TEXT_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';
const styles = {
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  barContainer: {
    flex: 1,
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: 'flex-end',
  },
  bar: {
    backgroundColor: TEXT_COLOR,
    marginBottom:2,
  },
  barLabel:{
    alignSelf:'center',
    color: TEXT_COLOR,
  }
};
function BarChart({data}) {
  const maxValue = data.reduce((maxValue, entry) => Math.max(maxValue, entry.value), 0);

  const bars = data.map((entry) => (
    <Bar value={maxValue > 0 ? entry.value / maxValue : 0} key={entry.label} label={entry.label} />
  ));
  return <View style={styles.chartContainer}>{bars}</View>;
}
function Bar({value, label}) {
  return (
    <View style={styles.barContainer}>
      <View style={[styles.bar, {flex: value}]} />
      <Text style={styles.barLabel}>{label}</Text>
    </View>
  );
}
export default BarChart;
