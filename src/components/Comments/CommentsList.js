import React from 'react'
import { FlatList } from 'react-native'
import { keyExtractor } from '../../helpers/tools'
import { PostItem } from '../Posts'
import CommentItem from './CommentItem'
import { listBg } from '../../helpers/colors'

export default function CommentsList({ item }) {

    return (
        <FlatList
            style={{ flex: 1, backgroundColor: listBg }}
            data={item.comments}
            ListHeaderComponent={<PostItem item={item} style={{marginBottom: 25}}/>}
            renderItem={({ item }) => <CommentItem item={item} />}
            keyExtractor={keyExtractor}
        />
    )
}
