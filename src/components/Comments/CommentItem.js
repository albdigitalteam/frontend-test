import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as COLORS from '../../helpers/colors'
import { MaterialIcons } from '@expo/vector-icons'

export default function CommentItem({ item }) {

    const { name, body, email } = item
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.body}>{body}</Text>
            <View style={styles.emailContainer}>
                <View style={{width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialIcons name="email" size={14} color={COLORS.secundary} />
                </View>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: COLORS.background,
        borderTopWidth: 1,
        borderTopColor: COLORS.border
    },
    name: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 6
    },
    body: {
        fontSize: 12,
        textAlign: 'justify',
        color: COLORS.secundary,
        marginBottom: 12
    },
    email: {
        fontSize: 12,
        color: COLORS.secundary,
        textTransform: 'lowercase',
        marginTop: -2
    },
    emailContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})