import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import ControlBar from './ControlBar';
import ResultPanel from './ResultPanel';

export default class Main extends Component {
    render() {
        return (
            <View style={style.container} >
                <Image source={require('../assets/images/banner.jpg')} style={style.banner} />
                <ResultPanel />
                <ControlBar />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#dedede',
        alignItems: 'center'
    },
    banner: {
        width: 350,
        height: 225
    }
});