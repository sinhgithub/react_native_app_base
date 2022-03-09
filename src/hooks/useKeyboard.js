import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = (dependence = {}) => {
  const [keyboardInfo, setKeyboardInfo] = useState({
    width: 0,
    screenX: 0,
    screenY: 0,
    height: 0,
    isDisplay: false
  });

  const keyboardDidShow = useCallback(e => {
    const { endCoordinates } = e;
    setKeyboardInfo({ ...endCoordinates, isDisplay: true });
  }, []);

  const keyboardDidHide = useCallback(e => {
    setKeyboardInfo({
      width: 0,
      screenX: 0,
      screenY: 0,
      height: 0,
      isDisplay: false
    });
  }, []);

  useEffect(() => {
    const eventKeyboardDidShow = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const eventKeyboardDidHide = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    return () => {
      eventKeyboardDidShow.remove();
      eventKeyboardDidHide.remove();
    };
  }, [dependence, keyboardDidHide, keyboardDidShow]);

  return { keyboardInfo, isDisplay: keyboardInfo.isDisplay };
};

export default useKeyboard;
