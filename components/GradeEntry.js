import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, ScrollView} from 'react-native';
import InputAccessoryText from './InputAccessoryText';
import {
  ACCENT_COLOR,
  FAIL_COLOR,
  NEUTRAL_BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SUCCESS_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../Constants';

const styles = {
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: TEXT_COLOR_DARK,
    marginLeft: 10,
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  container: {
    height: 60,
    margin: 5,
    marginBottom: 0,
    borderRadius: 10,
    flexDirection: 'row',
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  passIndicator: {
    width: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  infoBox: {
    marginRight: 15,
    alignItems: 'center',
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
    <View style={styles.container}>
      <View
        style={[
          styles.passIndicator,
          {
            backgroundColor: passed ? SUCCESS_COLOR.main : FAIL_COLOR.main,
          },
        ]}
      />
      <View style={styles.secondaryContainer}>
        <Text style={styles.name}>{grade.name}</Text>
        <View style={styles.row}>
          <InfoBox title="Grade" grade={grade.grade} />
          <InfoBox title="Credits" grade={grade.grade} />
        </View>
      </View>
    </View>
  );
};

GradeEntry.propTypes = {
  grade: PropTypes.object,
};

export default GradeEntry;
