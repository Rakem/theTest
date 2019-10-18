import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Text, FlatList, TouchableOpacity,View} from 'react-native';
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

const Grades = ({navigation}) => {
  const {loading, error, data} = useQuery(GRADES_QUERY);
  if (error) return <Text>{error.message}</Text>;
  if (loading) return <Text>loading</Text>;

  function onCreateNewPressed() {
    navigation.navigate('NewGrade');
  }
  return (
    <>
      <FlatList
        data={data.grades}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('GradeDetail',{grade:item})}>
            <GradeEntry grade={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

Grades.navigationOptions = ({navigation}) => ({
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('NewGrade')}>
      <View style={{paddingRight: 15}}>
        <Text>Add</Text>
      </View>
    </TouchableOpacity>
  ),
});

Grades.propTypes = {};

export default Grades;
