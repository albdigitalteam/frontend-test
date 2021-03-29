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
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { createStorePost } from '../../actions'

export default function index() {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { state: { posts } } = useSelector(store => store)
    const [request, setRequest] = useState(false)
    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
        userId: 1 //fake app user,
    })

    const types = {
        title: 'title',
        body: 'body'
    }

    const handleOnChangePost = (type, text) => {
        setNewPost({
            ...newPost,
            [type]: text
        })
    }

    const handleCancel = () => {
        navigation.goBack()
    }

    const handleSubmit = () => {

        const keys = Object.keys(newPost)
        let error = false

        for (const key of keys) {
            if (newPost[key] === '') {
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
            dispatch(createStorePost(newPost))
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{t('posts:add.header')}</Text>
                    <Input
                        placeholder={t('posts:add.title')}
                        onChange={text => handleOnChangePost(types.title, text)}
                        autoFocus
                    />
                    <Input
                        placeholder={t('posts:add.body')}
                        numberOfLines={5}
                        multiline
                        onChange={text => handleOnChangePost(types.body, text)}
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
