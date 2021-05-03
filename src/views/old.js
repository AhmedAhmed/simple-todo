import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  View, 
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [todoItems, createTodoItem] = useState([]);

  const onPressCreateItem = () => {
    setModalVisible(true);
  }
  const createTodo = () => {
    if (newTask.trim() !== '') {
      setModalVisible(false);
      createTodoItem([...todoItems, {
        id: todoItems.length,
        task: newTask
      }])
    }
    setNewTask('');
  }

  const Item = ({todo}) => (
    <View style={styles.todo_item}>
      <Text>{todo.task}</Text>
    </View>
  );

  const renderItem = ({item}) => (<Item todo={item} />)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Todo List</Text>
      </View>
      <View style={styles.todoListContainer}>
        <FlatList
          data={todoItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        onPress={onPressCreateItem}
        color="#000000"
        style={styles.createItemButton}
      >
        <Text style={styles.appButtonText}>Create Item</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setNewTask(value)}
            placeholder='Write task'
            placeholderTextColor='#666666'
            value={newTask}
          />
          <TouchableOpacity
              onPress={createTodo}
              color="#000000"
              style={styles.submitButton}
            >
            <Text style={styles.appButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '75%',
    marginTop: '55%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignContent:'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2
  },
  appButtonText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  submitButton: {
    height: 75,
    width: '90%',
    backgroundColor: '#e74c3c',
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
    marginBottom: 20
  },
  createItemButton: {
    height: 75,
    width: '90%',
    backgroundColor: '#e74c3c',
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
  todoAction: {

  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  header: {
    flex: 1,
    marginTop: 75,
    fontSize: 40,
    fontWeight: 'bold'
  },
  todoListContainer: {
    flex:3,
    flexDirection: 'column',
    width: '100%'
  },
  todo_item: {
    padding: 30,
    backgroundColor: '#F8F8F8',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    height: 15,
    width: 15,
    marginRight: 15,
  },
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    margin: '70%',
    padding: 20,
    width: '90%'
  },
});
