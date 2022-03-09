import React, { memo, useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';

const ToggleBottomContent = props => {
  const { onToggle, title, isHideBorderLeft, icon } = props;
  const [isToggle, setIsToggle] = useState(false);

  const handleToogle = useCallback(() => {
    setIsToggle(!isToggle);
  }, [isToggle]);

  useEffect(() => {
    onToggle?.(!isToggle ? 'down' : 'up');
  }, [isToggle, onToggle]);

  return (
    <TouchableOpacity style={styles.toggle} onPress={handleToogle} activeOpacity={0.5}>
      <View style={styles.row}>
        <View style={styles.toggleTitle}>
          {icon ? (
            icon
          ) : (
            <View style={[styles.borderLeft, isHideBorderLeft ? { borderLeftWidth: 0 } : {}]} />
          )}
          <Text style={styles.toggleTitleText}>{title || ''}</Text>
        </View>
        <View style={styles.toggleIcon}>
          <Icon fontName="AntDesign" name={!isToggle ? 'down' : 'up'} size={20} color={'gray'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ToggleBottomContent);
