import React  from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={ styles.headerText }>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: -1,
      backgroundColor: 'maroon',
      paddingTop: 30,
      padding: 20,
      alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        color: "white"
        
    }
});

export default Header


