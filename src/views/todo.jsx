import React from 'react';
import {
  CheckBox
} from 'react-native-elements'

import {
  StyleSheet
} from 'react-native';

const Todo = props => {
  return (
    <CheckBox
      style={styles.checkbox}
      title={props.todo}
      checked={props.completed}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  checkbox: {
    flex: 1,
    padding: 10,
    width: "100%"
  },
});

export default Todo;
