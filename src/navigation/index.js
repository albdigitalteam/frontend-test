import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import {
    Home,
    Post,
    PostAdd,
    CommentAdd
} from '../screens'
import * as COLORS from '../helpers/colors'

const Stack = createStackNavigator()

const defaultOptions = {
    headerStyle: {
       backgroundColor: COLORS.listBg,
    },
    headerTintColor: COLORS.textInvert,
}

function AppStack() {

    const { t } = useTranslation()

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator screenOptions={defaultOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Post"
                    component={Post}
                    options={{
                        title: t('common:screen.post'),
                    }}
                />
                <Stack.Screen
                    name="PostAdd"
                    component={PostAdd}
                    options={{
                        title: t('common:screen.postAdd'),
                    }}
                />
                <Stack.Screen
                    name="CommentAdd"
                    component={CommentAdd}
                    options={{
                        title: t('common:screen.commentAdd'),
                    }}
                />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default function AppContainer() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})