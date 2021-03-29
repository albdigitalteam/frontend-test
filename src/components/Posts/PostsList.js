import React from 'react'
import { keyExtractor } from '../../helpers/tools'
import Swipe from '../Swipe'
import { listBg } from '../../helpers/colors'
import { FlatList } from "react-native-gesture-handler";
import { deleteStorePost } from '../../actions'
import { useDispatch } from 'react-redux'
import PostItem from './PostItem'

export default function PostsList({ posts }) {

    const dispatch = useDispatch()
    const onSwipe = (item) => {
        dispatch(deleteStorePost(item))
    }

    return (
        <FlatList
            style={{ flex: 1, backgroundColor: listBg }}
            data={posts}
            renderItem={({ item }) => (
                <Swipe onSwipe={() => onSwipe(item)}>
                    <PostItem item={item} />
                </Swipe>
            )}
            keyExtractor={keyExtractor}
            indicatorStyle='white'
        />
    )
}
