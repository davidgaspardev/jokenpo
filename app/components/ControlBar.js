import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default function ControlBar() {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button} >
                <Text style={style.buttonText}>Stone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Paper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Scissor</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: '#ababab',
        elevation: 3
    },
    button: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
});