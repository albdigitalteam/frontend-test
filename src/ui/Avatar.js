import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as COLORS from '../helpers/colors';
import { getUserInitials, randomBackgroundColor } from '../helpers/tools'

const Avatar = ({ label = '', style = null }) => {

    return (
        <View style={{ position: 'relative' }}>
            <View
                style={
                    [
                        styles.container,
                        style,
                        {
                            backgroundColor: randomBackgroundColor(label)
                        }
                    ]
                }
            >
                <Text style={styles.label}>{getUserInitials(label)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 45,
        borderRadius: 45,
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 2,
        borderColor: COLORS.background
    },
    label: {
        color: COLORS.textInvert,
        fontSize: 12,
        fontWeight: '600',
    }
})

export default Avatar
