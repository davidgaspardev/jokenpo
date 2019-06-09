import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function ResultPanel({ winner }) {

    switch(winner) {
        case 'you':
            break;
        case 'smartphone':
            break;
        default:
            return (
                <View style={style.container}>
                    <Image source={require('../assets/images/smartphone.png')} style={style.smartphone}/>
                    <Text>I'm your smartphone. Shall we play jokenpo ?</Text>
                </View>
            );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smartphone: {
        width: 100,
        height: 100,
        margin: 20
    }
});