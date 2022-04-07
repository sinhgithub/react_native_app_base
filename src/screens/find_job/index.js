import React, { memo, useCallback, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { TabsHorizontal } from 'components/';
import { tabFindJobScreen } from 'constants/data_constants';
import styles from './styles';
import ListAllJob from './components/ListAllJob';
import ListSavedJob from './components/ListSavedJob';
import ListJobApply from './components/ListJobApply';

const FindJobScreen = ({ navigation, route }) => {
  const [content, setContent] = useState(<ListAllJob />);

  React.useEffect(() => {
    if (route) {
      console.log(route, 'routeroute');
    }
  }, [route]);

  const onChangeTab = useCallback(index => {
    Keyboard.dismiss();
    switch (index.index) {
      case 0:
        setContent(<ListAllJob navigation={navigation} />);
        break;
      case 1:
        setContent(<ListSavedJob />);
        break;
      case 2:
        setContent(<ListJobApply />);
        break;
      default:
        setContent(<ListAllJob />);
        break;
    }
  }, []);

  return (
    <View
      style={styles.findJobScreen}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.tabs} onStartShouldSetResponder={() => Keyboard.dismiss()}>
        <TabsHorizontal
          data={tabFindJobScreen}
          tabItemStyle={styles.tabItemStyle}
          onPress={onChangeTab}
        />
      </View>
      <View style={{ flex: 1 }}>{content}</View>
    </View>
  );
};

export default memo(FindJobScreen);
