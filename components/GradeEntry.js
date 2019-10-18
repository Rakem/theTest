import React from 'react';
import PropTypes from 'prop-types';
import Paper from './Paper';
import {Text} from 'react-native';

const GradeEntry = ({grade}) => {

  return (
    <Paper>
      <Text>{grade.name}</Text>
      <Text>{grade.grade}</Text>
      <Text>{grade.credits}</Text>
    </Paper>
  );
};

GradeEntry.propTypes = {
  grade: PropTypes.object,
};

export default GradeEntry;
