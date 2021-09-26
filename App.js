import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackBase  } from 'react-native';
import AddTodos from './components/AddTodos';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [ todos, setTodos ] = useState([])

  useEffect(() => readData(), [])

  const saveData = async (todoData) => {
    try {
      await AsyncStorage.setItem('todo_data', todoData)
      console.log("data added successfully")
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const todoData = await AsyncStorage.getItem('todo_data')
      if (todoData !== null) {
        setTodos(JSON.parse(todoData))
      }
      return ;
    } catch (e) {
      console.log('Failed to fetch the data from storage')
    }
  }

  const onPressHandler = (key) => {
    setTodos((prevTodos) => {
      let filteredData =  prevTodos.filter(todo => todo.key != key);
      saveData(JSON.stringify(filteredData));
      return filteredData;

    })
  }


  const addItemInList = (newTodo) => {
    if(newTodo.length > 3){
      setTodos((prevTodos) => {
        let addedTodos = [ {text: newTodo, key: Math.random().toString()}, ...prevTodos ]
        saveData(JSON.stringify(addedTodos))
        return addedTodos;
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be greater than 3 char', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ])
    }
    
  }


  return (
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
      console.log('dismised keyboard')
    }}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodos addItemInList= { addItemInList }/>
        <View style={styles.list}>
          <FlatList 
            data= { todos }
            renderItem = {({ item }) => (
              <TodoItem item= { item } onPressHandler= { onPressHandler } />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});