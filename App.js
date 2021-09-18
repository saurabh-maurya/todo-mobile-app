import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackBase  } from 'react-native';
import AddTodos from './components/AddTodos';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [ todos, setTodos ] = useState([
    { text: "Buy Coffee", key: '1' },
    { text: "Buy Shoes", key: '2' },
    { text: "Meet Al at Schhol", key: '3' }
  ])

  const onPressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const addItemInList = (newTodo) => {

    if(newTodo.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: newTodo, key: Math.random().toString()},
          ...prevTodos
        ]
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
