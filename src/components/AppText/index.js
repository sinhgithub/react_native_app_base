import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { translate as trans } from 'src/i18n';

const selectText = createSelector(
  state => state.setting.lang,
  (_, children) => children,
  (_, children) => {
    return trans(children);
  }
);

const AppText = ({ children, style, translate = false, ...props }) => {
  const lang = useSelector(state => selectText(state, children));

  return (
    <Text {...props} style={style} allowFontScaling={false}>
      {translate ? lang + '' : children}
    </Text>
  );
};

AppText.propTypes = {
  style: PropTypes.any,
  translate: PropTypes.bool,
  children: PropTypes.any
};

AppText.defaultProps = {
  translate: false
};

export default AppText;
