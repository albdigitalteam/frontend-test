import React from 'react';
import { StyleSheet,  View, } from 'react-native';
import LottieView from 'lottie-react-native';
import processing from '../assets/animations/loading.json';
 
const Processing = () => {

    return (
        <View style={styles.container}>
                <LottieView 
                    style={styles.processing}
                    source={processing}
                    loop
                    autoPlay
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    processing:{
        width: '100%',
        height: 'auto'
    }
})

export default Processing