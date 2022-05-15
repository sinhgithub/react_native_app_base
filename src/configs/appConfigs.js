const END_POINT = 'http://167.179.76.33:8000/';

export const getImageFromHost = link => {
  return `${END_POINT}api/file/${link}`;
};

const AppConfigs = {
  END_POINT
};

export default AppConfigs;
