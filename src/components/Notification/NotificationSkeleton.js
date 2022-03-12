import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { SPACING } from 'constants/size';

const NotificationSkeleton = () => {
  return (
    <View>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" paddingHorizontal={12} marginTop={12}>
          <SkeletonPlaceholder.Item width={10} height={10} borderRadius={5} marginTop={5} />
          <SkeletonPlaceholder.Item flex={1} borderRadius={8} marginTop={4}>
            <SkeletonPlaceholder.Item width={'100%'} height={20} borderRadius={8} marginLeft={4} />
            <SkeletonPlaceholder.Item
              width={'96%'}
              height={20}
              borderRadius={8}
              marginLeft={4}
              marginTop={4}
            />
            <SkeletonPlaceholder.Item
              width={'40%'}
              height={20}
              borderRadius={8}
              marginLeft={4}
              marginTop={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default memo(NotificationSkeleton);
