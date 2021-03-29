import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Processing, AddButton } from '../../ui'
import * as COLORS from '../../helpers/colors'
import { useSelector, useDispatch } from 'react-redux'
import { setStoreData } from '../../actions'
import { PostsList } from '../../components/Posts'
import { useNavigation } from '@react-navigation/native'

export default function index() {

    const { state } = useSelector(store => store)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(setStoreData())
    }, [])

    const handleAddPost = () => {
        navigation.navigate('PostAdd')
    }

    return (
        <View style={styles.container}>
            {
                !state.posts.length ? (
                    <Processing />
                ) : (
                    <View>
                        <PostsList posts={state.posts} />
                        <AddButton onPress={handleAddPost} />
                    </View>
                )
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        position: 'relative'
    }
})
