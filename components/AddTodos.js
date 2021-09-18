import React, {useState} from 'react';
import {  StyleSheet, Text, TextInput, Button, View  } from 'react-native';

const AddTodos = ( { addItemInList }) => {
    const [ newTodo, setNewTodo ] = useState('')
    const changeHandler = (text) => {
        setNewTodo(text)
    }
    return (
        <View>
           <TextInput 
                placeholder= 'new todo...'
                style = {styles.textInput}
                onChangeText = {changeHandler}
                value = {newTodo}
           />
           <Button 
                style= {styles.addTodoButton} 
                color= 'maroon'
                title="Add Todo"
                onPress= { () => {
                    setNewTodo('')
                    addItemInList(newTodo) 
                }} 
           />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'maroon',
        marginTop: 10,
        marginBottom: 20,
        padding: 10,
        borderStyle: 'solid'
    }
    
});
export default AddTodos
