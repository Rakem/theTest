import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import GradeEntry from '../components/GradeEntry';
import {GRADES_QUERY} from '../Queries';
import {NEUTRAL_BACKGROUND_COLOR, TEXT_COLOR} from '../Constants';
import HeaderButton from '../components/HeaderButton';

const styles = {
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{
    backgroundColor:NEUTRAL_BACKGROUND_COLOR,
  }
};

const Grades = ({navigation}) => {
  const {loading, error, data, refetch} = useQuery(GRADES_QUERY, {
    notifyOnNetworkStatusChange: true,
  });
  if (error) {
    return <Text>{error.message}</Text>;
  }

  function onCreateNewPressed() {
    navigation.navigate('NewGrade');
  }

  const grades = data ? data.grades : [];

  return (
    <>
      <FlatList
        style={styles.list}
        data={grades}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('GradeDetail', {grade: item})}>
            <GradeEntry grade={item} />
          </TouchableOpacity>
        )}
        refreshing={loading}
        onRefresh={() => refetch()}
      />
    </>
  );
};

Grades.navigationOptions = ({navigation}) => ({
  headerRight: (
    <HeaderButton title="Add" onPress={() => navigation.navigate('NewGrade')} />
  ),
});

Grades.propTypes = {};

export default Grades;
