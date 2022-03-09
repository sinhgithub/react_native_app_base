import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { SPACING } from 'constants/size';

const CardJobSkeleton = () => {
  return (
    <View style={styles.marginVertical12}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="flex-start"
          paddingHorizontal={12}>
          <SkeletonPlaceholder.Item width={84} height={84} borderRadius={8} />
          <SkeletonPlaceholder.Item flex={1} flexGrow={1} paddingLeft={SPACING.Normal}>
            <SkeletonPlaceholder.Item width={'100%'} height={20} borderRadius={4} marginTop={4} />
            <SkeletonPlaceholder.Item marginTop={4} width={'80%'} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={4} width={'70%'} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={30}
              borderRadius={8}
              flexDirection="row"
              marginTop={4}>
              <SkeletonPlaceholder.Item width={60} height={30} borderRadius={8} />
              <SkeletonPlaceholder.Item width={60} height={30} borderRadius={8} marginLeft={4} />
              <SkeletonPlaceholder.Item width={60} height={30} borderRadius={8} marginLeft={4} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default memo(CardJobSkeleton);
