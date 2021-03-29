import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as COLORS from '../helpers/colors';
import { Ionicons } from '@expo/vector-icons';

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.icon}>
                <Ionicons name='ios-add' size={30} color='#fff' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: COLORS.emphasis,
        bottom: 30,
        right: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30
    }
})

export default AddButton
