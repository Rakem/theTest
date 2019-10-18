import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../components/Paper';
import {Text, View} from 'react-native';
import SingleNumberVis from '../components/SingleNumberVis';
import {FAIL_COLOR, NEUTRAL_BACKGROUND_COLOR, SUCCESS_COLOR} from '../Constants';
import InputAccessoryText from '../components/InputAccessoryText';

const styles = {
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
  },
  visContainer: {
    flex:0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:6,
  },
  numberVis: {
    flex:0.49,
  },
  box:{
    backgroundColor:NEUTRAL_BACKGROUND_COLOR,
    borderRadius:10,
    padding:10,
    marginBottom:7,
  },

};
const GradeDetail = ({navigation}) => {
  const grade = navigation.getParam('grade', {});

  const passed = grade.status === 'Bestanden';
  const passColor = passed ? SUCCESS_COLOR.main : FAIL_COLOR.main;
  return (
    <View style={styles.container}>
      <View style={styles.visContainer}>
        <SingleNumberVis
          title="Grade"
          value={grade.grade}
          style={[{backgroundColor: passColor},styles.numberVis]}
        />
        <SingleNumberVis
          title="Credits"
          value={grade.credits}
          style={[{backgroundColor: passColor},styles.numberVis]}
        />
      </View>
      <View style={styles.box}>
        <InputAccessoryText>Semester</InputAccessoryText>
        <Text>{grade.semester}</Text>
      </View>
      <View style={styles.box}>
        <InputAccessoryText>Note</InputAccessoryText>
        <Text>{grade.note}</Text>
      </View>
    </View>
  );
};

GradeDetail.propTypes = {
  grade: PropTypes.object,
};
GradeDetail.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('grade').name,
});
export default GradeDetail;
