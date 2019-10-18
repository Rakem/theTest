import React from 'react';
import PropTypes from 'prop-types';
import Paper from './Paper';
import {Text, View,ScrollView} from 'react-native';
import InputAccessoryText from './InputAccessoryText';
import {FAIL_COLOR, NEUTRAL_BACKGROUND_COLOR, PRIMARY_COLOR, SUCCESS_COLOR, TEXT_COLOR} from '../Constants';

const styles = {
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: TEXT_COLOR,
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    margin: 5,
    marginBottom:0,
    borderRadius: 10,
  },
  nameContainer: {
    height: 30,
    padding: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  infoBox: {
    flex: 1,
    backgroundColor: NEUTRAL_BACKGROUND_COLOR,
    alignItems: 'center',
  },
  bottomBar: {
    height: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
};

function InfoBox(props) {
  return (
    <View style={styles.infoBox}>
      <View>
        <InputAccessoryText>{props.title}</InputAccessoryText>
        <Text style={styles.grade}>{props.grade}</Text>
      </View>
    </View>
  );
}

const GradeEntry = ({grade}) => {
  const passed = grade.status === 'Bestanden';
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={[styles.nameContainer,{
        backgroundColor: passed ? SUCCESS_COLOR.main : FAIL_COLOR.main,
      }]}>
        <Text style={styles.name}>{grade.name}</Text>
      </View>
      <View style={styles.row}>
        <InfoBox title="Grade" grade={grade.grade} />
        <InfoBox title="Credits" grade={grade.grade} />
      </View>
      <View
        style={[
          styles.bottomBar,
          {
            backgroundColor:passed ? SUCCESS_COLOR.main : FAIL_COLOR.main,
          },
        ]}
      />
    </View>
    </ScrollView>
  );
};

GradeEntry.propTypes = {
  grade: PropTypes.object,
};

export default GradeEntry;
