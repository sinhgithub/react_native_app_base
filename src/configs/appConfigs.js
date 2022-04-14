import Config from 'react-native-config';

export const getImageFromHost = link => `${Config.END_POINT}api/file/${link}`;

const AppConfigs = {
  END_POINT: Config.END_POINT
};

export default AppConfigs;
