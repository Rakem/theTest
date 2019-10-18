import React, {useState} from 'react';
import { Button, View, ActivityIndicator} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomDatePicker from '../components/CustomDatePicker';
import CustomSwitch from '../components/CustomSwitch';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {GRADES_QUERY} from '../Queries';
import {NEUTRAL_BACKGROUND_COLOR, PRIMARY_COLOR} from '../Constants';

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
      grade: {
        name: $name
        semester: $semester
        grade: $grade
        credits: $credits
        status: $status
        note: $note
        date: $date
      }
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

function NewGrade({navigation}) {
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [grade, setGrade] = useState('');
  const [credits, setCredits] = useState('');
  const [status, setStatus] = useState(false);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());

  const [doSubmit, {loading}] = useMutation(CREATE_GRADE_MUTATION, {
    refetchQueries: [{query: GRADES_QUERY}],
    awaitRefetchQueries: true,
  });

  function convertFloat(value) {
    return parseFloat(value.replace(',', '.'));
  }

  //needs better validation and a message for the user
  const floatGrade = convertFloat(grade);
  const isValidGrade = floatGrade <= 6 && floatGrade >= 1;
  const submitEnabled =
    !loading && name !== '' && grade !== '' && credits !== '' && isValidGrade;

  function onSubmit() {
    if (!submitEnabled) {
      return;
    }
    doSubmit({
      variables: {
        name: name,
        semester: semester,
        grade: grade,
        credits: credits,
        status: status ? 'Bestanden' : 'Nicht Bestanden',
        note: note,
        date: note,
      },
    }).then(({data}) => {
      if (data) {
        navigation.navigate('Grades');
      }
    });
  }

  return (
    <>
      <View style={styles.container}>
        <CustomTextInput title="Name" value={name} onChangeText={setName} />
        <CustomTextInput
          title="Grade"
          value={grade}
          onChangeText={setGrade}
          keyboardType="decimal-pad"
          er
        />
        <CustomTextInput
          title="Credits"
          value={credits}
          onChangeText={setCredits}
          keyboardType="decimal-pad"
        />
        <CustomTextInput
          title="semester"
          value={semester}
          onChangeText={setSemester}
        />
        <CustomSwitch title="Passed" value={status} onValueChange={setStatus} />
        <CustomDatePicker title="Date" date={date} onDateChanged={setDate} />
        <CustomTextInput
          title="Note"
          value={note}
          onChangeText={setNote}
          multiline
        />

        <Button
          color={submitEnabled ? PRIMARY_COLOR.main : NEUTRAL_BACKGROUND_COLOR}
          title={'Submit'}
          onPress={onSubmit}
          enabled={!submitEnabled}
        />
        {loading && <ActivityIndicator />}
      </View>
    </>
  );
}

NewGrade.propTypes = {};

NewGrade.navigationOptions = ({navigation}) => ({
  title: 'Add Custom Grade',
});
export default NewGrade;
