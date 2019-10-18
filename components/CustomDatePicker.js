import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ACCENT_COLOR} from '../Constants';
import InputAccessoryText from './InputAccessoryText';

const styles = {
  dateSelect: {
    borderBottomWidth: 1,
    margin: 3,
    borderColor: ACCENT_COLOR,
    height: 49,
  },
  text: {
    position: 'relative',
    top: 20,

  }
};

function CustomDatePicker({title, date, onDateChanged}) {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <>
      <InputAccessoryText>{title}</InputAccessoryText>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <View style={styles.dateSelect}>
          <Text style={styles.text}>{date.toLocaleDateString()}</Text>
        </View>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(_, date) => {
            setShowPicker(false);
            if (date) {
              onDateChanged(date);
            }
          }}
        />
      )}
    </>
  );
}

export default CustomDatePicker;
