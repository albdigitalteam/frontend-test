import React, { useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as COLORS from '../../helpers/colors'
import PostItemStatus from './PostItemStatus'
import { useNavigation } from '@react-navigation/native'

export default function PostItem({ item, style }) {

    const { id, userId, title, body, comments = [] } = item
    const navigation = useNavigation()

    const handleClick = useCallback(() => {
        navigation.navigate('Post', { item, postId: id })
    }, [item.id, navigation])

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                onPress={handleClick}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.body} >{body}</Text>
            </TouchableOpacity>
            <PostItemStatus fromUser={userId} commentsCount={comments.length} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12,
        paddingHorizontal: 12,
        margin: 12,
        borderRadius: 6,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.background,
        position: 'relative',
        paddingBottom: 60
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: 6
    },
    body: {
        fontSize: 12,
        textAlign: 'justify',
        color: COLORS.secundary,
        marginBottom: 6
    },
    action: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 12
    },
    actionContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30
    }
})
