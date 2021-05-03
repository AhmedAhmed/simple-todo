import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { connect } from 'react-redux';
import { 
  StyleSheet,
  Text, 
  SafeAreaView, 
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  addTodo,
  toggleCompleted
}  from '../store/todo/actions';

import Todo from '../views/todo';

const HomeScreen = (props) => {
  const renderItem = ({item, index}) => {
    return (
      <Todo 
        todo={item.todo}
        completed={item.completed}
        onPress={() => props.toggleCompleted(item, index)}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Todo List</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.todos}>
          <FlatList
            style={styles.list}
            data={props.todos}
            renderItem={renderItem}
            keyExtractor={item => item.todo}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Create')}
          color="#FFFFFF"
          style={styles.createItemButton}
        >
          <Text style={styles.appButtonText}>Create Todo</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    color: "#444444",
    fontSize: 50,
    fontWeight: "700"
  }, 
  content: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25
  },
  todos: {
    flex: 1,
    width: "100%",
  },
  list: {
    flex: 1
  },
  createItemButton: {
    height: 75,
    width: '90%',
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8
  },
  appButtonText: {
    color: "#FFFFFF",
    fontSize: 20
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
};

const mapDispatchToProps = dispatch => ({
    toggleCompleted: (todo, index) => dispatch(toggleCompleted(todo, index))
});

const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);


export default HomeScreenContainer;