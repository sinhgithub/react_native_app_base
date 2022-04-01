import React, { memo, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, AppText } from 'components/';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { TEXT_COLOR, CUSTOM_COLOR, BACKGROUND_COLOR } from 'constants/colors';
import { sectionProfileType } from 'constants/data_constants';
import { Shadow } from 'constants/stylesCSS';

const Section = props => {
  const {
    containerStyle,
    leftTitle,
    rightTitle,
    descText,
    buttonTile,
    hideRightTittle,
    onPressButton,
    type,
    data,
    onDelete,
    onEdit
  } = props;
  const renderItem = () => {
    if (!data || data?.length <= 0) {
      return null;
    }
    switch (type) {
      case sectionProfileType.complete_profile:
        break;
      case sectionProfileType.update_experience:
        return data?.map((item, index) => {
          let ArrayItem = [];
          for (const k in item) {
            ArrayItem.push({ key: k, value: item[k] });
          }
          const listItem = ArrayItem.map((v, i) => {
            const isFirstItem = i === 0;
            const isLastItem = i === ArrayItem.length - 1;
            return (
              <ItemTitleValue
                key={i}
                title={v.key}
                value={v.value}
                isFirstItem={isFirstItem}
                isLastItem={isLastItem}
              />
            );
          });
          return (
            <View style={styles.listExperience} key={index}>
              <View style={styles.listExperienceAction}>
                <TouchableOpacity
                  style={styles.listExperienceActionEdit}
                  onPress={() => onEdit?.(item, type, index)}>
                  <Icon name="edit" fontName="AntDesign" size={25} color={CUSTOM_COLOR.RedBasic} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.listExperienceActionDelete}
                  onPress={() => onDelete?.(item, type, index)}>
                  <Icon name="delete" fontName="AntDesign" size={25} color={CUSTOM_COLOR.Black} />
                </TouchableOpacity>
              </View>
              {listItem}
            </View>
          );
        });
      case sectionProfileType.update_education:
        if (!data || !(data?.education && data?.educationStatus)) {
          return null;
        }
        let ArrayItem = [];
        for (const k in data) {
          ArrayItem.push({ key: k, value: data[k] });
        }
        const listItem = ArrayItem.map((v, i) => {
          const isFirstItem = i === 0;
          const isLastItem = i === ArrayItem.length - 1;
          return (
            <ItemTitleValue
              key={i}
              title={v.key}
              value={v.value}
              isFirstItem={isFirstItem}
              isLastItem={isLastItem}
            />
          );
        });
        return (
          <View style={styles.listExperience}>
            <View style={styles.listExperienceAction}>
              <TouchableOpacity
                style={styles.listExperienceActionEdit}
                onPress={() => onEdit(data, type, null)}>
                <Icon name="edit" fontName="AntDesign" size={25} color={CUSTOM_COLOR.RedBasic} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.listExperienceActionDelete}
                onPress={() => onDelete(data, type, null)}>
                <Icon name="delete" fontName="AntDesign" size={25} color={CUSTOM_COLOR.Black} />
              </TouchableOpacity>
            </View>
            {listItem}
          </View>
        );
      case sectionProfileType.update_skill:
        let ArrayItemSkill = [];
        let filter = {};
        data
          .filter(item => item)
          .forEach(item => {
            filter[item.id] = item;
          });
        for (const k in filter) {
          ArrayItemSkill.push({ key: k, value: filter[k] });
        }
        return ArrayItemSkill?.map((item, index) => {
          let ArrayItemValue = [];
          for (const k in item.value) {
            ArrayItemValue.push({ key: k, value: item.value[k] });
          }
          ArrayItemValue.forEach((i, idx) => {
            if (i.key === 'id') {
              ArrayItemValue.splice(idx, 1);
            }
          });
          const listItemSkill = ArrayItemValue.map((v, i) => {
            const isFirstItem = i === 0;
            const isLastItem = i === ArrayItemSkill.length - 1;
            return (
              <ItemTitleValue
                key={i}
                title={v.key}
                value={v.value}
                isFirstItem={isFirstItem}
                isLastItem={isLastItem}
              />
            );
          });
          return (
            <View style={styles.listExperience} key={index}>
              <View style={styles.listExperienceAction}>
                <TouchableOpacity
                  style={styles.listExperienceActionDelete}
                  onPress={() => onDelete?.(item, type, index)}>
                  <Icon name="delete" fontName="AntDesign" size={25} color={CUSTOM_COLOR.Black} />
                </TouchableOpacity>
              </View>
              {listItemSkill}
            </View>
          );
        });
      default:
        return null;
    }
  };
  const disableDesc = useMemo(() => {
    switch (type) {
      case sectionProfileType.update_experience:
        if (!data || data?.length <= 0) {
          return false;
        }
        return true;
      case sectionProfileType.update_education:
        if (
          (data?.education === '' && data?.educationStatus === '') ||
          !(data?.education && data?.educationStatus)
        ) {
          return false;
        }
        return true;
      case sectionProfileType.update_skill:
        if (!data || data?.length <= 0) {
          return false;
        }
        return true;
      default:
        return false;
    }
  }, [data, type]);

  const hideSubmitButton = useMemo(() => {
    switch (type) {
      case sectionProfileType.update_experience:
        return false;
      case sectionProfileType.update_education:
        if (
          (data?.education === '' && data?.educationStatus === '') ||
          !(data?.education && data?.educationStatus)
        ) {
          return false;
        }
        return true;
      case sectionProfileType.update_skill:
        return false;
      default:
        return false;
    }
  }, [data, type]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.heading, data && { paddingVertical: SPACING.Small }]}>
        <View style={styles.headingLeft}>
          <Text style={styles.headingLeftText}>{leftTitle}</Text>
        </View>
        {!hideRightTittle && (
          <TouchableOpacity style={styles.headingRight}>
            <Text style={styles.headingRightText}>{rightTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      {!disableDesc && (
        <View>
          <Text style={styles.headingTextDesc}>{descText}</Text>
        </View>
      )}
      {renderItem()}
      {!hideSubmitButton && (
        <View style={{ marginTop: 6 }}>
          <Button
            type="modal"
            title={buttonTile}
            containerStyle={styles.button}
            titleStyle={styles.titleButton}
            submitMethod={() => onPressButton?.(type)}
          />
        </View>
      )}
    </View>
  );
};

const ItemTitleValue = ({ title, value, isLastItem, isFirstItem }) => {
  const containerStyleControl = {
    marginBottom: 0
  };
  return (
    <View style={[styles.itemTitleValue, isLastItem && containerStyleControl]}>
      <AppText translate style={styles.itemTitleValueTitle}>
        {`api.${title}`}
      </AppText>
      <Text translate style={styles.itemTitleValueDot}>
        :
      </Text>
      <AppText translate style={styles.itemTitleValueContent}>
        {value}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.Large
  },
  headingLeft: {
    paddingLeft: SPACING.XXNormal,
    borderLeftWidth: 1,
    borderLeftColor: CUSTOM_COLOR.RedBasic,
    flex: 1,
    paddingRight: SPACING.Large
  },
  headingLeftText: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black
  },
  headingRightText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.BlueStone
  },
  headingTextDesc: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText
  },
  button: {
    marginTop: 10,
    backgroundColor: BACKGROUND_COLOR.BasicGray
  },
  titleButton: {
    color: TEXT_COLOR.Black
  },

  listExperience: {
    marginTop: SPACING.XXNormal,
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow,
    padding: SPACING.XXNormal,
    borderRadius: 10
  },
  listExperienceAction: {
    flexDirection: 'row',
    marginBottom: SPACING.Normal,
    justifyContent: 'flex-end'
  },
  listExperienceActionEdit: {
    marginRight: SPACING.XNormal
  },
  itemTitleValue: {
    flexDirection: 'row',
    marginBottom: SPACING.Normal
  },
  itemTitleValueTitle: {
    minWidth: '35%',
    maxWidth: '40%',
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR
  },
  itemTitleValueDot: {
    marginLeft: SPACING.Small
  },
  itemTitleValueContent: {
    marginLeft: SPACING.XXNormal,
    flex: 1
  }
});

export default memo(Section);
