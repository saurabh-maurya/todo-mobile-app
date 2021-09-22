import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {  StyleSheet, Text, TouchableOpacity, View  } from 'react-native';

const TodoItem = ({ item, onPressHandler }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onPressHandler( item.key)}>
                <Icon name="delete" size={18} color="maroon" />
            </TouchableOpacity>
            <Text style={styles.textItem}>{ item.text }</Text>
        </View>  
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'maroon',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    textItem: {
        marginLeft: 10
    }

});

export default TodoItem