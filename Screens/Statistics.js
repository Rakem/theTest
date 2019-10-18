import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';
import {GRADES_QUERY} from '../Queries';

import {View, Text} from 'react-native';
import SingleNumberVis from '../components/SingleNumberVis';
import {PRIMARY_COLOR, TEXT_COLOR} from '../Constants';
import GradeDetail from './GradeDetail';
import BarChart from '../components/BarChart';

const styles = {
  chartContainer: {
    height: 200,
    padding: 20,
    backgroundColor: PRIMARY_COLOR.light,
    margin: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex: 0.3,
  },
  barChart: {flex: 1},
  xAxis: {marginTop: 10},
  numberVis: {
    flex: 0.49,
  },
};

const Statistics = props => {
  const {loading, error, data} = useQuery(GRADES_QUERY);
  const grades = data ? data.grades : [];

  function convertFloat(value) {
    return parseFloat(value.replace(',', '.'));
  }
  const sumGrades = grades.reduce(
    (sum, grade) => sum + convertFloat(grade.grade),
    0.0,
  );
  const averageGrade = sumGrades / grades.length;
  const sumCredits = grades.reduce(
    (sum, grade) => sum + convertFloat(grade.credits),
    0,
  );

  const bins = grades.reduce(
    (bins, grade) => {
      if (grade.grade) {
        const key = Math.round(convertFloat(grade.grade));
        bins[key] = bins[key] + 1;
      }
      return bins;
    },
    [0, 0, 0, 0, 0, 0],
  );

  const chartData = bins.map((value, index) => ({
    label: index + 1,
    value: value,
  }));
  return (
    <>
      <View style={styles.chartContainer}>
        <BarChart data={chartData} />
      </View>
      <View style={styles.infoContainer}>
        <SingleNumberVis
          title={'Total Credits'}
          value={sumCredits.toFixed(2)}
          style={styles.numberVis}
        />
        <SingleNumberVis
          title={'Average Grade'}
          value={averageGrade.toFixed(2)}
          style={styles.numberVis}
        />
      </View>
    </>
  );
};

Statistics.propTypes = {};

export default Statistics;
