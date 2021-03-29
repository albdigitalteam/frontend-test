import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Alert,
    Platform
} from 'react-native'
import { Input, Button, Processing } from '../../ui'
import { useTranslation } from 'react-i18next'
import * as COLORS from '../../helpers/colors'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { createStorePostComment } from '../../actions'

export default function index() {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const route = useRoute()
    const navigation = useNavigation()
    const { state: { posts } } = useSelector(store => store)
    const [request, setRequest] = useState(false)
    const { params: { postId } } = route

    const [newComment, setNewComment] = useState({
        name: '',
        body: '',
        email: '',
        postId
    })

    const types = {
        name: 'name',
        email: 'email',
        body: 'body'
    }

    const handleOnChangeComment = (type, text) => {
        setNewComment({
            ...newComment,
            [type]: text
        })
    }

    const handleCancel = () => {
        navigation.goBack()
    }

    const handleSubmit = () => {

        const keys = Object.keys(types)
        let error = false

        for (const key of keys) {
            if (newComment[key] === '') {
                error = true
                break
            }
        }

        if (error) {
            Alert.alert('Error', 'Required')
            return
        }

        try {
            setRequest(true)
            dispatch(createStorePostComment(newComment))
        } catch {
            setRequest(false)
            Alert.alert('Error', 'Required')
        }

    }

    useEffect(() => {
        request && navigation.goBack()
    }, [posts])

    return (

        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1, alignSelf: 'stretch' }}
                behavior={Platform.OS === 'ios' ? "padding" : ''}
            >
                <ScrollView>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{t('posts:comments.add.header')}</Text>
                    <Input
                        placeholder={t('posts:comments.add.name')}
                        onChange={text => handleOnChangeComment(types.name, text)}
                        autoFocus
                    />
                    <Input
                        placeholder={t('posts:comments.add.email')}
                        onChange={text => handleOnChangeComment(types.email, text)}
                        keyboardType='email-address'
                    />
                    <Input
                        placeholder={t('posts:comments.add.body')}
                        numberOfLines={5}
                        multiline
                        onChange={text => handleOnChangeComment(types.body, text)}
                    />
                    {
                        request && (
                            <Processing />
                        )
                    }
                    {
                        !request && (
                            <View style={styles.actions}>
                                <Button
                                    label={t('common:cancel')}
                                    onPress={handleCancel}
                                    style={styles.cancel}
                                />
                                <Button
                                    label={t('common:submit')}
                                    onPress={handleSubmit}
                                    style={styles.submit}
                                />
                            </View>
                        )
                    }
                </ScrollView>
            </KeyboardAvoidingView >
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancel: {
        backgroundColor: COLORS.secundary,
        flex: 1,
        flexGrow: 0.4
    },
    submit: {
        backgroundColor: COLORS.blue,
        flex: 1,
        flexGrow: 0.4
    }
})
