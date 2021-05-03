import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux';

import {
  addTodo
}  from '../store/todo/actions';

const AddTodoScreen = props => {
  const [text, setText] = useState("");
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 0
  const onPress = () => {
    props.addTodo(text);
    props.navigation.goBack();
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.root}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <TextInput
            editable
            maxLength={500}
            placeholder='Add Task'
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity
              onPress={onPress}
              color="#FFFFFF"
              style={styles.createItemButton}
            >
              <Text style={styles.appButtonText}>Create Todo</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 50
  },
  input: {
    padding: 20,
    fontSize: 25,
    width: '100%'
  },
  createItemButton: {
    height: 75,
    width: '90%',
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  appButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
};

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});

const AddTodoScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoScreen);

export default AddTodoScreenContainer;