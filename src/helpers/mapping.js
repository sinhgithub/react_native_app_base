export const mapLiteracy = literacy => {
  if (!literacy) {
    return '';
  }
  switch (literacy.trim()) {
    case 'PTCS':
      return 'JUNIOR_HIGH_SCHOOL';
    case 'JUNIOR_HIGH_SCHOOL':
      return 'PTCS';
    case 'Trung học':
      return 'HIGH_SCHOOL';
    case 'HIGH_SCHOOL':
      return 'Trung học';
    case 'Chứng chỉ':
      return 'CERTIFICATE';
    case 'CERTIFICATE':
      return 'Chứng chỉ';
    case 'Trung cấp':
      return 'INTERMEDIATE';
    case 'INTERMEDIATE':
      return 'Trung cấp';
    case 'Cao đẳng':
      return 'COLLEGE';
    case 'COLLEGE':
      return 'Cao đẳng';
    case 'Cử nhân':
      return 'BACHELOR';
    case 'BACHELOR':
      return 'Cử nhân';
    case 'Kỹ sư':
      return 'ENGINEER';
    case 'ENGINEER':
      return 'Kỹ sư';
    case 'Thạc sĩ nghệ thuật':
      return 'MASTERS_OF_ARTS';
    case 'MASTERS_OF_ARTS':
      return 'Thạc sĩ nghệ thuật';
    case 'Thạc sĩ thương mại':
      return 'MASTERS_OF_COMMERCE';
    case 'MASTERS_OF_COMMERCE':
      return 'Thạc sĩ thương mại';
    case 'Thạc sĩ khoa học':
      return 'MASTERS_OF_SCIENCE';
    case 'MASTERS_OF_SCIENCE':
      return 'Thạc sĩ khoa học';
    case 'Thạc sĩ kiến trúc':
      return 'MASTERS_OF_ARCHITECTURE';
    case 'MASTERS_OF_ARCHITECTURE':
      return 'Thạc sĩ kiến trúc';
    case 'Thạc sĩ quản trị kinh doanh':
      return 'MASTERS_OF_BUSINESS_ADMINISTRATION';
    case 'MASTERS_OF_BUSINESS_ADMINISTRATION':
      return 'Thạc sĩ quản trị kinh doanh';
    case 'Thạc sĩ kỹ thuật ứng dụng':
      return 'MASTERS_OF_APPLIED_ENGINEERING';
    case 'MASTERS_OF_APPLIED_ENGINEERING':
      return 'Thạc sĩ kỹ thuật ứng dụng';
    case 'Thạc sĩ luật':
      return 'MASTERS_OF_LAWS';
    case 'MASTERS_OF_LAWS':
      return 'Thạc sĩ luật';
    case 'Thạc sĩ y học':
      return 'MASTERS_OF_MEDICINE';
    case 'MASTERS_OF_MEDICINE':
      return 'Thạc sĩ y học';
    case 'Thạc sĩ dược phẩm':
      return 'MASTERS_OF_PHARMACY';
    case 'MASTERS_OF_PHARMACY':
      return 'Thạc sĩ dược phẩm';
    case 'Tiến sĩ':
      return 'DOCTOR';
    case 'DOCTOR':
      return 'Tiến sĩ';
    case 'Khác':
      return 'OTHER';
    case 'OTHER':
      return 'Khác';
    default:
      return literacy;
  }
};

export const mapJobType = type => {
  if (!type) {
    return '';
  }
  switch (type.trim()) {
    case 'Toàn thời gian cố định':
      return 'FULLTIME';
    case 'FULLTIME':
      return 'Toàn thời gian cố định';
    case 'Bán thời gian':
      return 'PARTTIME';
    case 'PARTTIME':
      return 'Bán thời gian';
    default:
      return type;
  }
};

export const mapRank = rank => {
  if (!rank) {
    return '';
  }
  switch (rank.trim()) {
    case 'Sinh viên/Thực tập':
      return 'INTERNS';
    case 'INTERNS':
      return 'Sinh viên/Thực tập';
    case 'Mới đi làm':
      return 'FRESHER';
    case 'FRESHER':
      return 'Mới đi làm';
    case 'Nhân viên':
      return 'PERSONNEL';
    case 'PERSONNEL':
      return 'Nhân viên';
    case 'Kỹ thuật viên/Kỹ sư':
      return 'ENGINEER';
    case 'ENGINEER':
      return 'Kỹ thuật viên/Kỹ sư';
    case 'Trưởng nhóm/Giám sát':
      return 'LEADER';
    case 'LEADER':
      return 'Trưởng nhóm/Giám sát';
    case 'Quản lý/Trưởng phòng':
      return 'MANAGER1';
    case 'MANAGER1':
      return 'Quản lý/Trưởng phòng';
    case 'Giám đốc':
      return 'MANAGER2';
    case 'MANAGER2':
      return 'Giám đốc';
    case 'Quản lý cấp cao':
      return 'MANAGER3';
    case 'MANAGER3':
      return 'Quản lý cấp cao';
    case 'Điều hành cấp cao':
      return 'MANAGER4';
    case 'MANAGER4':
      return 'Điều hành cấp cao';
    default:
      return rank;
  }
};

export const mapExperience = exp => {
  if (!exp) {
    return '';
  }
  switch (exp.trim()) {
    case '0 - 1 năm kinh nghiệm':
      return 'FRESHER';
    case 'FRESHER':
      return '0 - 1 năm kinh nghiệm';

    case '1 - 2 năm kinh nghiệm':
      return 'JUNIOR';
    case 'JUNIOR':
      return '1 - 2 năm kinh nghiệm';

    case '2 - 3 năm kinh nghiệm':
      return 'MIDDLE';
    case 'MIDDLE':
      return '2 - 3 năm kinh nghiệm';

    case '5 - 10 năm kinh nghiệm':
      return 'SENIOR';
    case 'SENIOR':
      return '5 - 10 năm kinh nghiệm';

    case 'hơn 10 năm kinh nghiệm':
      return 'MASTER';
    case 'MASTER':
      return 'hơn 10 năm kinh nghiệm';

    default:
      return exp;
  }
};

export const mapGender = gender => {
  if (!gender) {
    return '';
  }
  switch (gender.trim()) {
    case 'Nam/Nữ':
      return 'ALL';
    case 'ALL':
      return 'Nam/Nữ';
    case 'Nam':
      return 'MALE';
    case 'MALE':
      return 'Nam';
    case 'Nữ':
      return 'FEMALE';
    case 'FEMALE':
      return 'Nữ';
    default:
      return gender;
  }
};

export const mapState = state => {
  if (!state) {
    return '';
  }
  switch (state.trim()) {
    case 'PENDING':
      return 'Chờ duyệt';
    case 'Chờ duyệt':
      return 'PENDING';
    case 'APPROVED':
      return 'Đã duyệt';
    case 'Đã duyệt':
      return 'APPROVED';
    case 'REJECT':
      return 'Từ chối';
    case 'Từ chối':
      return 'REJECT';
    default:
      return state;
  }
};
