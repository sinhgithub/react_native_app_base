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
    id: 'JUNIOR_HIGH_SCHOOL',
    value: 'JUNIOR_HIGH_SCHOOL',
    label: 'PTCS'
  },
  {
    id: 'INTERMEDIATE',
    value: 'INTERMEDIATE',
    label: translate('common.intermediate')
  },
  {
    id: 'CERTIFICATE',
    value: 'CERTIFICATE',
    label: 'Chứng chỉ'
  },
  {
    id: 'BACHELOR',
    value: 'BACHELOR',
    label: 'Cử nhân'
  },
  {
    id: 'ENGINEER',
    value: 'ENGINEER',
    label: 'Kĩ sư'
  },
  {
    id: 'DOCTOR',
    value: 'DOCTOR',
    label: 'Tiến sĩ'
  },
  {
    id: 'OTHER',
    value: 'OTHER',
    label: 'Khác'
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
  },
  {
    id: 'MIDDLE',
    value: 'MIDDLE',
    label: '2 - 3 năm kinh nghiệm'
  },
  {
    id: 'SENIOR',
    value: 'SENIOR',
    label: '5 - 10 năm kinh nghiệm'
  },
  {
    id: 'MASTER',
    value: 'MASTER',
    label: 'hơn 10 năm kinh nghiệm'
  }
];

export const degreeType = [
  {
    id: 'PARTTIME',
    value: 'PARTTIME',
    label: translate('common.part_time_employee')
  },
  {
    id: 'FULLTIME',
    value: 'FULLTIME',
    label: translate('common.full_time_employee')
  },
  {
    id: 'INTERNS',
    value: 'INTERNS',
    label: 'INTERNS'
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
    id: 'income',
    title: 'Thu nhập'
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
  genderRadios: 'genderRadios',
  searchJob: 'searchJob'
};

export const addExperienceForm = [
  {
    id: 'companyName',
    label: 'Tên công ty',
    type: inputType.text,
    order: 1
  },
  {
    id: 'description',
    label: 'Mô tả',
    type: inputType.textarea,
    order: 5
  },
  {
    id: 'endDate',
    label: 'Ngày kết thúc',
    type: inputType.date,
    order: 4
  },
  {
    id: 'position',
    label: 'Vị trí',
    type: inputType.text,
    order: 2
  },
  {
    id: 'startDate',
    label: 'Ngày bắt đầu',
    type: inputType.date,
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
    type: inputType.text
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
    // placeholder: 'Nhập tên'
  },
  {
    id: 'phone',
    type: inputType.number,
    label: 'Số điện thoại'
    // placeholder: 'Nhập số điện thoại'
  },
  {
    id: 'gender',
    type: inputType.genderRadios,
    label: 'Giới tính'
    // placeholder: 'Chọn giới tính'
  },
  {
    id: 'birthday',
    type: inputType.date,
    label: 'Ngày sinh'
    // placeholder: 'Chọn ngày tháng'
  },
  {
    id: 'province',
    type: inputType.select,
    label: 'Tỉnh/ Thành phố'
    // placeholder: 'Chọn tỉnh thành'
  },
  {
    id: 'district',
    type: inputType.select,
    label: 'Quận/ huyện'
    // placeholder: 'Chọn quận/ huyện'
  },
  {
    id: 'address',
    type: inputType.text,
    label: 'Địa chỉ chi tiết'
    // placeholder: 'Nhập địa chỉ chi tiết'
  }
];

export const withdrawRequestForm = [
  {
    id: 'wallet',
    type: inputType.select,
    label: 'Ví'
  },
  {
    id: 'withdrawalAmount',
    type: inputType.text,
    label: 'Nhập số tiền cần rút',
    keyboardType: 'numeric'
  }
];
