import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, Button, View, TextInput, TouchableOpacity} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomDatePicker from '../components/CustomDatePicker';
import CustomSwitch from '../components/CustomSwitch';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_GRADE_MUTATION = gql`
  mutation createGrade(
    $name: String!
    $semester: String!
    $grade: String!
    $credits: String!
    $status: String!
    $note: String!
    $date: String
  ) {
    response: createGrade(
      name: $name
      semester: $semester
      grade: $grade
      credits: $credits
      status: $status
      note: $note
      date: $date
    ) {
      grade
    }
  }
`;

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
};

const NewGrade = props => {
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [grade, setGrade] = useState('');
  const [credits, setCredits] = useState('');
  const [status, setStatus] = useState(false);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());

  const [doSubmit, {loading}] = useMutation(CREATE_GRADE_MUTATION);

  function onSubmit(){
    doSubmit({
      variables: {
        name: name,
        semester: semester,
        grade: grade,
        credits: credits,
        status: status ? 'Bestanden' : 'Nicht Bestanden',
        note: note,
        date: note,
      }});
  }

  return (
    <>
      <View style={styles.container}>
        <CustomTextInput
          title="Name"
          value={semester}
          onChangeText={setSemester}
        />
        <CustomTextInput title="Grade" value={grade} onChangeText={setGrade} />
        <CustomTextInput
          title="Credits"
          value={credits}
          onChangeText={setCredits}
        />
        <CustomSwitch title="Passed" value={status} onValueChange={setStatus} />
        <CustomDatePicker title="Date" date={date} onDateChanged={setDate} />
        <CustomTextInput
          title="Note"
          value={note}
          onChangeText={setNote}
          multiline
        />

        <Button title={'Submit'} onPress={onSubmit} />
      </View>
    </>
  );
};

NewGrade.propTypes = {};

export default NewGrade;
