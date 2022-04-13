import React, { memo } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ConversationSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" paddingHorizontal={12} marginTop={12}>
        <SkeletonPlaceholder.Item width={50} height={50} borderRadius={25} />
        <SkeletonPlaceholder.Item flex={1} borderRadius={8} marginTop={4}>
          <SkeletonPlaceholder.Item width={'100%'} height={20} borderRadius={8} marginLeft={4} />
          <SkeletonPlaceholder.Item
            width={'50%'}
            height={20}
            borderRadius={8}
            marginLeft={4}
            marginTop={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default memo(ConversationSkeleton);
