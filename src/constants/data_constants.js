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

export const tabMessageBoxScreen = [
  {
    id: 'message',
    title: 'Tin nhắn'
  },
  {
    id: 'notify',
    title: 'Thông báo'
  }
];

export const tabDetailProfileScreen = [
  {
    id: 'account',
    title: 'Tài khoản'
  },
  {
    id: 'profile',
    title: 'Giấy tờ'
  },
  {
    id: 'contact',
    title: 'Liên hệ'
  }
];

export const tabIncomeScreen = [
  {
    id: 'common',
    title: 'Tổng quan'
  },
  {
    id: 'history',
    title: 'Lịch sử ví'
  },
  {
    id: 'Rút tiền',
    title: 'Rút tiền'
  }
];

export const sectionProfileType = {
  update_experience: 'update_experience',
  complete_profile: 'complete_profile',
  add_experience: 'add_experience',
  update_education: 'update_education',
  add_education: 'add_education',
  update_skill: 'update_skill',
  add_skill: 'add_skill'
};

export const titleUpdateProfile = {
  add_experience: 'Thêm kinh nghiệm',
  complete_profile: 'Hoàn tất hồ sơ',
  update_experience: 'Cập nhật kinh nghiệm',
  update_education: 'Cập nhật học vấn',
  add_education: 'Thêm học vấn',
  update_skill: 'Cập nhật kỹ năng',
  add_skill: 'Thêm kỹ năng'
};

export const inputType = {
  text: 'text',
  date: 'date',
  textarea: 'textarea',
  select: 'select',
  number: 'number',
  genderRadios: 'genderRadios'
};

export const addExperienceForm = [
  {
    id: 'companyName',
    placeholder: 'Tên công ty',
    type: inputType.text,
    order: 1
  },
  {
    id: 'description',
    placeholder: 'Mô tả',
    type: inputType.textarea,
    order: 5
  },
  {
    id: 'endDate',
    placeholder: 'Ngày kết thúc',
    type: inputType.date,
    order: 4
  },
  {
    id: 'position',
    placeholder: 'Vị trí',
    type: inputType.text,
    order: 2
  },
  {
    id: 'startDate',
    placeholder: 'Ngày bắt đầu',
    type: inputType.text,
    order: 3
  }
];

export const addEducationForm = [
  {
    id: 'education',
    placeholder: 'Trường',
    type: inputType.text
  },
  {
    id: 'majors',
    placeholder: 'Ngành học',
    type: inputType.text
  },
  {
    id: 'educationStatus',
    placeholder: 'Tốt nghiệp/ Chưa tốt nghiệp',
    type: inputType.date
  }
];

export const addSkillForm = [
  {
    id: 'skill',
    type: inputType.select
  },
  {
    id: 'description',
    type: inputType.textarea,
    placeholder: 'Mô tả'
  }
];

export const detailProfileForm = [
  {
    id: 'name',
    type: inputType.text,
    label: 'Tên'
  },
  {
    id: 'phone',
    type: inputType.number,
    label: 'Số điện thoại'
  },
  {
    id: 'gender',
    type: inputType.genderRadios,
    label: 'Giới tính'
  },
  {
    id: 'birthday',
    type: inputType.date,
    label: 'Ngày sinh'
  },
  {
    id: 'address',
    type: inputType.text,
    label: 'Địa chỉ'
  }
];
