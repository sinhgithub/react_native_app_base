import React, { memo, useCallback, useState, useMemo } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles';
import { translate } from 'src/i18n';
import { ToggleBottomContent } from 'components/';
import { SPACING } from 'constants/size';
import JobRequireItem from './JobRequireItem';
import { Icon } from 'components/';
import {
  jobDetailType,
  genderType,
  educationType,
  experienceLevelType,
  degreeType
} from 'constants/data_constants';

const JobRequire = props => {
  const { type, gender, degree, education, experienceLevel, career } = props.data;
  const [isShowContent, setIsShowContent] = useState(true);

  const mapJobType = key => {
    return jobDetailType.find(item => item.value === key)?.label || key;
  };

  const mapGender = key => {
    return genderType.find(item => item.value === key)?.label || key;
  };
  const mapDegree = key => {
    return degreeType.find(item => item.value === key)?.label || key;
  };
  const mapCareer = key => {
    return key;
  };
  const mapEducation = key => {
    return educationType.find(item => item.value === key)?.label || key;
  };
  const mapExperienceLevel = key => {
    return experienceLevelType.find(item => item.value === key)?.label || key;
  };

  const requireData = useMemo(() => {
    return [
      {
        id: 'jobType',
        title: translate('common.job_type'),
        value: mapJobType(type),
        icon: <Icon fontName="AntDesign" size={20} color="black" name="tags" />
      },
      {
        id: 'gender',
        title: translate('common.gender'),
        value: mapGender(gender),
        icon: <Icon fontName="FontAwesome" size={20} color="black" name="transgender" />
      },
      {
        id: 'degree',
        title: translate('common.degree'),
        value: mapDegree(degree),
        icon: <Icon fontName="FontAwesome5Pro" size={20} color="black" name="hackerrank" />
      },
      {
        id: 'career',
        title: translate('common.career'),
        value: mapCareer(career),
        icon: <Icon fontName="AntDesign" size={20} color="black" name="cloudo" />
      },
      {
        id: 'experienceLevel',
        title: translate('common.years_of_experience'),
        value: mapExperienceLevel(experienceLevel),
        icon: <Icon fontName="Entypo" size={20} color="black" name="level-down" />
      },
      {
        id: 'education',
        title: translate('common.education'),
        value: mapEducation(education),
        icon: <Icon fontName="AntDesign" size={20} color="black" name="staro" />
      }
    ];
  }, [career, degree, education, experienceLevel, gender, type]);

  const listRequire = requireData?.map((item, index) => {
    return (
      <JobRequireItem
        key={item.id || index}
        title={item.title}
        value={item.value}
        icon={item.icon}
        containerStyle={{
          marginTop: index === 0 ? 0 : SPACING.Normal,
          paddingBottom: index === requireData.length - 1 ? SPACING.XXNormal : 0
        }}
      />
    );
  });

  const handleToggleContent = useCallback(key => {
    if (key === 'down') {
      setIsShowContent(true);
    } else {
      setIsShowContent(false);
    }
  }, []);

  return (
    <View style={styles.jobRequire}>
      <ToggleBottomContent title={translate('common.job_require')} onToggle={handleToggleContent} />
      <Animated.View style={[styles.jobRequireContent]}>
        <View>{isShowContent && listRequire}</View>
      </Animated.View>
    </View>
  );
};

export default memo(JobRequire);
