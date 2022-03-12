import React, { memo } from 'react';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const Icon = props => {
  const { fontName, size, color, name } = props;
  switch (fontName) {
    case 'FontAwesome':
      return <IconFontAwesome name={name} size={size} color={color} />;
    case 'AntDesign':
      return <IconAntDesign name={name} size={size} color={color} />;
    case 'Feather':
      return <IconFeather name={name} size={size} color={color} />;
    case 'Entypo':
      return <IconEntypo name={name} size={size} color={color} />;
    case 'FontAwesome5Pro':
      return <FontAwesome5Pro name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    default:
      return <IconFontAwesome name={name} size={size} color={color} />;
  }
};

Icon.defaultProps = {
  fontName: 'FontAwesome',
  size: PixelRatio.getFontScale() * 35
};

Icon.PropTypes = {
  fontName: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

export default memo(Icon);
