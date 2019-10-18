import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Text, FlatList} from 'react-native';
import Paper from '../components/Paper';
import GradeEntry from '../components/GradeEntry';
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
  if (loading) return <Text>loading</Text>;

  return (
    <>
      <FlatList
        data={data.grades}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <GradeEntry grade={item} />}
      />
    </>
  );
};

Grades.propTypes = {};

export default Grades;
