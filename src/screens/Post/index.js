import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { CommentsList } from '../../components/Comments'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { AddButton } from '../../ui'

export default function index() {

    const navigation = useNavigation()
    const route = useRoute()
    const { params: { item, postId } } = route
    const { state: { posts } } = useSelector(store => store)

    const post = posts.find(post => post.id === postId)

    const handleAddButton = () => {
        navigation.navigate('CommentAdd', { postId: item.id })
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <CommentsList item={post} />
            <AddButton onPress={handleAddButton} />
        </KeyboardAvoidingView>
    )
}
