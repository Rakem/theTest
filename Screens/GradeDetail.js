import React from 'react';
import PropTypes from 'prop-types';
import Paper from '../components/Paper';
import {Text} from 'react-native';

function GradeDetailWrapper({navigation}) {
  const grade = navigation.getParam('grade', {});
  return <GradeDetail grade={grade} />;
}

const GradeDetail = ({grade}) => {

  return (
    <Paper>
      <Text>{grade.name}</Text>
      <Text>{grade.grade}</Text>
      <Text>{grade.credits}</Text>
      <Text>{grade.semester}</Text>
      <Text>{grade.status}</Text>
      <Text>{grade.note}</Text>
    </Paper>
  );
};

GradeDetail.propTypes = {
  grade: PropTypes.object,
};

export default GradeDetailWrapper;
