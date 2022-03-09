import { ICClose, ICSearchField, ICSearchFieldCancel } from 'assets/icons';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { useRef, useState } from 'react';
import { useCallback } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { translate } from 'src/i18n';
import { scale } from 'utils/responsive';

const selectText = createSelector(
  state => state.setting.lang,
  (_, children) => children,
  (_, children) => {
    return translate(children);
  }
);

const SearchInput = ({ onSearch, placeholder = '', style, newBackground, isChat }) => {
  const ref = useRef();
  const [value, setValue] = useState('');

  const onChangeText = useCallback(
    text => {
      setValue(text);
      onSearch(text);
    },
    [onSearch]
  );

  const placeholderTxt = useSelector(state =>
    selectText(state, placeholder ? placeholder : 'common.search')
  );

  return (
    <TouchableNativeFeedback
      onPress={() => {
        ref.current.focus();
      }}>
      <View style={[style]}>
        <View style={[newBackground ? style : isChat ? styles.chatContainter : styles.container]}>
          <TouchableOpacity style={styles.searchIcon} onPress={() => onSearch(value)}>
            <ICSearchField />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              ref={ref}
              numberOfLines={1}
              style={styles.input}
              type="text"
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholderTxt}
              onEndEditing={() => onSearch(value)}
            />
          </View>
          {!!value && (
            <TouchableOpacity
              style={styles.cancelIcon}
              onPress={() => {
                setValue('');
                onSearch('');
              }}>
              {isChat ? <ICClose color={CUSTOM_COLOR.Black} /> : <ICSearchFieldCancel />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(4),
    backgroundColor: CUSTOM_COLOR.WhiteGray,
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  input: {
    padding: 0,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.GreenBold,
    textAlignVertical: 'center',
    height: 40
  },
  searchIcon: {
    paddingHorizontal: SPACING.Normal,
    marginTop: 10
  },
  cancelIcon: {
    paddingHorizontal: SPACING.Normal,
    marginTop: 10
  },
  chatContainter: {
    backgroundColor: BACKGROUND_COLOR.Primary,
    paddingVertical: SPACING.XNormal,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(8),
    borderColor: CUSTOM_COLOR.grayBoder,
    borderWidth: scale(1)
  }
});
