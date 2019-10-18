import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Text} from 'react-native';
import Paper from '../components/Paper';
const GRADES_QUERY = gql`
  query getGrades {
    grades: getGrades {
      id
      name
      semester
      grade
      credits
      status
      note
      date
    }
  }
`;
const Grades = props => {
  const {loading, error, data} = useQuery(GRADES_QUERY);
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <Paper>
        <Text> {JSON.stringify(data)} </Text>
      </Paper>
    </>
  );
};

Grades.propTypes = {};

export default Grades;
