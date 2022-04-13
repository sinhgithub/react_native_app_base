import React, { memo, useEffect } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';
import { useDispatch } from 'react-redux';
import { setAnimatedBottomModalFailure } from 'actions/system';
import { useSelector } from 'react-redux';

const AnimatedModal = props => {
  const animation = React.useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const { animatedBottomModal } = useSelector(state => state.system);

  const onClose = () => {
    dispatch(setAnimatedBottomModalFailure());
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0]
  });

  useEffect(() => {
    if (animatedBottomModal.isDisplay) {
      Animated.timing(animation, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  }, [animatedBottomModal.isDisplay, animation]);

  return (
    <View style={[styles.modalWrapper]}>
      <View style={styles.closeArea} onStartShouldSetResponder={onClose} />
      <Animated.View
        style={[
          styles.modalContainer,
          {
            transform: [
              {
                translateY
              }
            ]
          }
        ]}>
        <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
          <Icon name="close" fontName="AntDesign" size={25} color="gray" />
        </TouchableOpacity>
        {props.children}
      </Animated.View>
    </View>
  );
};

export default memo(AnimatedModal);
