import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const width = Dimensions.get('screen').width;

interface IndicatorProps {
  amount: number;
}

const Skeleton = (props: IndicatorProps) => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
      {Array(props.amount)
        .fill(1)
        .map((item, index) => (
          <SkeletonPlaceholder.Item
            key={`${index}Skeleton`}
            marginVertical={5}
            width={width * 0.95}
            height={100}
            borderRadius={10}
          />
        ))}
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);
export default Skeleton;
