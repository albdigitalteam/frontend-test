import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from '../../ui'
import * as COLORS from '../../helpers/colors'
import { useSelector } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';

export default function PostStatus({ fromUser, commentsCount }) {

    const { state } = useSelector(store => store)
    const user = state.users.find(user => user.id === fromUser)

    return (
        <View style={styles.container}>
            <View style={[styles.distribute, { alignItems: 'flex-start' }]}>
                <MaterialIcons name="person" size={14} color={COLORS.blue} />
                <Text ellipsizeMode='tail' numberOfLines={1} style={[styles.label, { marginLeft: 2 }]}>
                    {user.name}
                </Text>
            </View>
            <View style={[styles.avatar, styles.distribute]}>
                <Avatar label={user.name} />
            </View>
            <View style={[styles.distribute, { justifyContent: 'flex-end', flex: 2 }]}>
                <MaterialIcons name="mode-comment" size={12} color={COLORS.blue} />
                <Text style={[styles.label, { marginLeft: 4 }]}>
                    {commentsCount}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 12,
        alignSelf: 'center',
    },
    label: {
        fontSize: 12,
        color: COLORS.blue
    },
    distribute: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        position: 'absolute',
        bottom: -30,
    }
})
