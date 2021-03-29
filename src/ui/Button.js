import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as COLORS from '../helpers/colors'

export default function Button({label, onPress, style}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        backgroundColor: COLORS.button,
        padding: 12,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 14,
        color: COLORS.textInvert,
        textTransform: 'uppercase'
    }
})