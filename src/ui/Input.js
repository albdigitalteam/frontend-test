import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import * as COLORS from '../helpers/colors'

export default function Input({ 
    placeholder, 
    numberOfLines = 1, 
    onChange, 
    multiline = false,
    keyboardType = 'default',
    autoFocus = false
}) {
    return (
        <View style={styles.container}>
            <TextInput
                numberOfLines={numberOfLines}
                onChangeText={onChange}
                placeholder={placeholder}
                multiline={multiline}
                minHeight={20}
                maxHeight={60}
                keyboardType={keyboardType}
                autoFocus={autoFocus}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secundary,
        borderRadius: 8,
        overflow: 'hidden'
    }

})