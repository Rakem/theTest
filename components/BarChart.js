import {Text, View, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TEXT_COLOR} from '../Constants';
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
    marginBottom: 2,
  },
  barLabel: {
    alignSelf: 'center',
    color: TEXT_COLOR,
  },
};
function BarChart({data}) {
  const [scale] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(scale, {
      delay: 50,
      toValue: 1,
      duration: 700,
    }).start();
  });

  const maxValue = data.reduce(
    (maxValue, entry) => Math.max(maxValue, entry.value),
    0,
  );

  const bars = data.map(entry => {
    const value = maxValue > 0 ? entry.value / maxValue : 0;
    const scaledValue = Animated.multiply(value, scale);
    return <Bar value={scaledValue} key={entry.label} label={entry.label} />;
  });
  return <View style={styles.chartContainer}>{bars}</View>;
}
function Bar({value, label}) {
  return (
    <View style={styles.barContainer}>
      <Animated.View style={[styles.bar, {flex: value}]} />
      <Text style={styles.barLabel}>{label}</Text>
    </View>
  );
}
export default BarChart;
