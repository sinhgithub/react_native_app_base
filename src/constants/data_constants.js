import React from 'react';
import { ICSearchBig, ICSupportBig, ICIncomBig as ICIncomeBig } from 'assets/icons';
import { translate } from 'src/i18n';

export const idTreeBigIcons = {
  find_job: 'find_job',
  income: 'income',
  support: 'support'
};

export const treeBigIconsConfig = [
  {
    id: idTreeBigIcons.find_job,
    icon: <ICSearchBig width={40} height={40} />,
    featureName: translate('common.find_job')
  },
  {
    id: idTreeBigIcons.income,
    icon: <ICIncomeBig width={40} height={40} />,
    featureName: translate('common.income')
  },
  {
    id: idTreeBigIcons.support,
    icon: <ICSupportBig width={40} height={40} />,
    featureName: translate('common.support')
  }
];

export const jobDetailType = [
  {
    id: 'PARTTIME',
    value: 'PARTTIME',
    label: translate('common.part_time_employee')
  },
  {
    id: 'FULLTIME',
    value: 'FULLTIME',
    label: translate('common.full_time_employee')
  }
];

export const genderType = [
  {
    id: 'ALL',
    value: 'ALL',
    label: translate('common.all_gender')
  },
  {
    id: 'MALE',
    value: 'MALE',
    label: translate('common.male')
  },
  {
    id: 'FEMALE',
    value: 'FEMALE',
    label: translate('common.female')
  }
];

export const educationType = [
  {
    id: 'HIGH_SCHOOL',
    value: 'HIGH_SCHOOL',
    label: translate('common.high_school')
  },
  {
    id: 'INTERMEDIATE',
    value: 'INTERMEDIATE',
    label: translate('common.intermediate')
  }
];

export const experienceLevelType = [
  {
    id: 'FRESHER',
    value: 'FRESHER',
    label: translate('common.fresher_level')
  },
  {
    id: 'JUNIOR',
    value: 'JUNIOR',
    label: translate('common.junior_level')
  }
];

export const tabFindJobScreen = [
  {
    id: 'list',
    title: 'Danh sách'
  },
  {
    id: 'saved',
    title: 'Đã lưu'
  },
  {
    id: 'recruitment',
    title: 'Ứng tuyển'
  }
];

export const tabWorkScreen = [
  {
    id: 'continue',
    title: 'Tiếp theo'
  },
  {
    id: 'workCalendar',
    title: 'Lịch làm việc'
  },
  {
    id: 'job',
    title: 'Công việc'
  }
];
