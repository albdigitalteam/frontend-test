import React from 'react';
import { StyledView, Text } from '@components/components';
import { IComment } from '@stores/comment/comment.types';

export default function PostItem({ item }: { item: IComment }): JSX.Element {
  return (
    <StyledView
      bg="white"
      m="s"
      shadowColor="black"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={5}
      borderRadius={8}>
      <StyledView p="m">
        <Text fontSize={14} fontWeight="700">
          {item?.name}
        </Text>
        <Text mt="s">{item.body}</Text>
      </StyledView>
    </StyledView>
  );
}
