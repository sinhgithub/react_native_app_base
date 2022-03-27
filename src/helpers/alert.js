import { Alert } from 'react-native';

export const alert = (title, message, textCancel, textOk, onCancel, onOk) => {
  Alert.alert(JSON.stringify(title), JSON.stringify(message), [
    {
      text: textCancel || 'Cancel',
      onPress: () => onCancel?.(),
      style: 'cancel'
    },
    { text: textOk || 'OK', onPress: () => onOk?.() }
  ]);
};
