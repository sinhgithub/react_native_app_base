import { inputType } from 'constants/data_constants';
import * as yup from 'yup';
const phoneRegExp = /((0|1)+([0-9]{8,10})\b)/g;
const textRequire = 'Thông tin này là bắt buộc';
export const schema = yup.object().shape({
  email: yup.string().email('Email không đúng định dạng').required(textRequire),
  password: yup.string().required(textRequire).min(6, 'Mật khẩu tối thiểu có 6 ký tự'),
  password_confirm: yup
    .string()
    .required(textRequire)
    .oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
  company_name: yup.string().required(textRequire),
  company_size: yup.string().required(textRequire),
  company_contact_person: yup.string().required(textRequire),
  company_phone: yup
    .string()
    .required(textRequire)
    .matches(phoneRegExp, 'Số điện thoại không đúng định dạng'),
  company_fields: yup.string().required(textRequire),
  recruit_demand: yup.string().required(textRequire),
  job_title: yup.string().required(textRequire),
  job_desc: yup.string().required(textRequire),
  recruit_quality: yup.string().required(textRequire),
  wage: yup.string().required(textRequire),
  regime_by_wage: yup.string().required(textRequire),
  wage_by_monet: yup.string().required(textRequire),
  job_description: yup.string().required(textRequire),
  benefit: yup.string().required(textRequire),
  file_title: yup.string().required(textRequire),
  file_upload: yup.string().required(textRequire),
  main_display_branch: yup.string().required(textRequire),
  rank: yup.string().required(textRequire),
  working_job_type: yup.string().required(textRequire),
  experience: yup.string().required(textRequire),
  degree: yup.string().required(textRequire),
  gender: yup.string().required(textRequire),
  application_deadline: yup.string().required(textRequire),
  job_require: yup.string().required(textRequire),
  contact_name: yup.string().required(textRequire),
  contact_address: yup.string().required(textRequire),
  contact_phone: yup
    .string()
    .required(textRequire)
    .matches(phoneRegExp, 'Số điện thoại không đúng định dạng'),
  status: yup.string().required(textRequire),
  employee_info: yup.string().required(textRequire)
});
export const defaultData = [
  // register
  {
    id: 'email',
    label: 'Nhập email',
    placeholder: 'Nhập địa chỉ email',
    type: inputType.text,
    require: true
  },
  {
    id: 'password',
    label: 'Mật khẩu',
    placeholder: 'Nhập mật khẩu',
    type: inputType.text,
    isPassword: true,
    require: true
  },
  {
    id: 'password_confirm',
    label: 'Nhập lại mật khẩu',
    placeholder: 'Nhập lại mật khẩu',
    type: inputType.text,
    isPassword: true
  },
  /// company
  {
    id: 'company_name',
    label: 'Tên công ty',
    placeholder: 'Nhập tên công ty',
    type: inputType.text,
    require: true
  },
  {
    id: 'company_size',
    label: 'Quy mô',
    placeholder: 'Số người',
    type: inputType.select,
    require: true
  },
  {
    id: 'company_contact_person',
    label: 'Người liên hệ',
    placeholder: 'Họ tên người liên hệ',
    type: inputType.text,
    require: true
  },
  {
    id: 'company_phone',
    label: 'Số điện thoại',
    placeholder: 'Nhập số điện thoại công ty',
    type: inputType.text,
    require: true
  },
  {
    id: 'company_fields',
    label: 'LĨnh vực hoạt động',
    placeholder: 'Chọn lĩnh vực',
    type: inputType.select,
    require: true
  },
  {
    id: 'recruit_demand',
    label: 'Nhu cầu tuyển dụng',
    placeholder: 'Nhu cầu tuyển dụng > 1 tháng',
    type: inputType.select,
    require: true
  },
  {
    id: 'conpany_website',
    label: 'Website',
    placeholder: 'Địa chỉ website công ty',
    type: inputType.text,
    require: false
  },
  {
    id: 'conpany_address',
    label: 'Địa chỉ',
    placeholder: 'Nhập địa chỉ công ty',
    type: inputType.text,
    require: false
  },
  // job info form
  {
    id: 'job_title',
    label: 'Chức danh',
    placeholder: 'Giám đốc',
    type: inputType.text,
    require: true
  },
  {
    id: 'job_desc',
    label: 'Mô tả việc làm',
    placeholder: 'Nhập mô tả việc làm',
    type: inputType.textarea,
    require: true
  },
  {
    id: 'recruit_quality',
    label: 'Số lượng tuyển',
    placeholder: '20',
    keyboardType: 'numeric',
    type: inputType.text,
    require: true
  },
  {
    id: 'wage',
    label: 'Mức lương',
    inputsData: [
      {
        id: 'from',
        label: '',
        placeholder: '30000',
        keyboardType: 'numberic'
      },
      {
        id: 'to',
        label: '',
        placeholder: '40000',
        keyboardType: 'numberic'
      }
    ],
    type: inputType.fromTo,
    require: true
  },
  {
    id: 'regime_by_wage',
    label: 'Chế độ theo lương',
    inputsData: [
      {
        id: 'by_shift',
        label: 'Theo ca',
        isDefaultValue: false
      },
      {
        id: 'by_month',
        label: 'Theo tháng',
        isDefaultValue: false
      },
      {
        id: 'by_hours',
        label: 'Theo giờ',
        isDefaultValue: true
      }
    ],
    type: inputType.selectOption,
    require: true
  },
  {
    id: 'wage_by_monet',
    label: 'Nhận lương tiền',
    type: inputType.toggle,
    require: false
  },
  {
    id: 'job_description',
    label: 'Mô tả công việc',
    type: inputType.textarea,
    require: true,
    placeholder: 'Không yêu cầu kinh nghiệm, ngoai hình ổn'
  },
  {
    id: 'benefit',
    label: 'Quyền lợi',
    type: inputType.textarea,
    require: true,
    placeholder: 'Hưởng chu cấp, lương thưởng theo doanh thú'
  },
  {
    id: 'file_title',
    label: 'Tiêu đề file',
    type: inputType.text,
    require: true,
    placeholder: 'CTV bán hàng'
  },
  {
    id: 'file_upload',
    label: '',
    type: inputType.uploadFile,
    require: true,
    placeholder: 'Tải file lên'
  },
  {
    id: 'benefit_if_have',
    label: 'Thưởng (nếu có)',
    type: inputType.text,
    require: false,
    placeholder: 'Thưởng doanh thu'
  },
  {
    id: 'benefit_quality',
    label: 'Mức thưởng',
    inputsData: [
      {
        id: 'from',
        label: '',
        placeholder: '20.000',
        keyboardType: 'numberic',
        type: inputType.text
      },
      {
        id: 'to',
        label: '',
        placeholder: '40.000',
        keyboardType: 'numberic',
        type: inputType.text
      }
    ],
    type: inputType.fromTo,
    require: false
  },
  {
    id: 'benefit_detail',
    label: 'Chi tiết thưởng',
    type: inputType.textarea,
    require: false,
    placeholder: 'Nhận hoa hổng theo sản phẩm từ 20.000 - 40.000'
  },
  {
    id: 'rules',
    label: 'Điều khoản',
    type: inputType.textarea,
    require: false,
    placeholder: 'Điều khoản sử dụng'
  },
  {
    id: 'date_benefit',
    label: 'Thời gian thưởng',
    type: inputType.date,
    require: false
  },
  // job reqquire
  {
    id: 'main_display_branch',
    label: 'Ngành hiển thị chính',
    placeholder: 'Kinh doanh',
    type: inputType.select,
    require: true
  },
  {
    id: 'rank',
    label: 'Cấp bậc',
    placeholder: 'Cộng tác viên',
    type: inputType.select,
    require: true
  },
  {
    id: 'working_job_type',
    label: 'Loại hình làm việc',
    placeholder: 'Full time',
    type: inputType.select,
    require: true
  },
  {
    id: 'experience',
    label: 'Kinh nghiệm',
    placeholder: 'Không yêu cầu kinh nghiệm',
    type: inputType.select,
    require: true
  },
  {
    id: 'degree',
    label: 'Bằng cấp',
    placeholder: 'Tốt nghiệp THPT',
    type: inputType.select,
    require: true
  },
  {
    id: 'age_from_to',
    label: 'Độ tuổi',
    inputsData: [
      {
        id: 'from',
        label: '',
        placeholder: '18',
        keyboardType: 'numberic',
        type: inputType.text
      },
      {
        id: 'to',
        label: '',
        placeholder: '29',
        keyboardType: 'numberic',
        type: inputType.text
      }
    ],
    type: inputType.fromTo,
    require: false
  },
  {
    id: 'gender',
    label: 'Giới tính',
    placeholder: 'Nam',
    type: inputType.select,
    require: true
  },
  {
    id: 'application_deadline',
    label: 'Hạn nộp hồ sơ',
    placeholder: '12-10-2023',
    type: inputType.date,
    require: true
  },
  {
    id: 'working_date',
    label: 'Ngày làm việc',
    inputsData: [
      {
        id: 'from',
        label: '',
        placeholder: '12-01-2022',
        type: inputType.date
      },
      {
        id: 'to',
        label: '',
        placeholder: '12-06-2022',
        type: inputType.date
      }
    ],
    type: inputType.fromTo,
    require: false
  },
  {
    id: 'working_time',
    label: 'Thời gian làm việc',
    inputsData: [
      {
        id: 'from',
        label: '',
        placeholder: '08:00',
        type: inputType.time
      },
      {
        id: 'to',
        label: '',
        placeholder: '20:00',
        type: inputType.time
      }
    ],
    type: inputType.fromTo,
    require: false
  },
  {
    id: 'job_require',
    label: 'Yêu cầu công việc',
    type: inputType.textarea,
    require: true,
    placeholder: 'Chịu được áp lực, nhanh nhẹn,...'
  },
  // ctv info
  {
    id: 'contact_name',
    label: 'Tên người liên hệ',
    placeholder: 'Nguyễn Văn A',
    type: inputType.text,
    require: true
  },
  {
    id: 'contact_address',
    label: 'Địa chỉ liên hệ',
    placeholder: 'Hà Đông, Hà Nội',
    type: inputType.text,
    require: true
  },
  {
    id: 'contact_phone',
    label: 'Số điện thoại liên hệ',
    placeholder: '0999 999 999',
    type: inputType.text,
    require: true
  },
  {
    id: 'contact_email',
    label: 'Email liên hệ',
    placeholder: 'ntd@gmail.com',
    type: inputType.text,
    require: true
  },
  // filter
  {
    id: 'recruitment',
    label: 'Nhập ID, tiêu đề tin tuyển dụng',
    placeholder: 'Nhập ID, tiêu đề tin tuyển dụng',
    type: inputType.text,
    require: false
  },
  {
    id: 'recruitment_post_date',
    label: 'Ngày đăng',
    placeholder: 'Chọn ngày',
    type: inputType.date,
    require: false
  },
  {
    id: 'status',
    label: 'Trạng thái',
    inputsData: [
      {
        id: 'recruit_status',
        label: 'Trạng thái tuyển',
        type: inputType.select
      },
      {
        id: 'main_status',
        label: 'Trạng thái',
        type: inputType.select
      }
    ],
    type: inputType.fromTo,
    require: false,
    noIcon: true
  },
  // profle
  {
    id: 'website',
    label: 'Website',
    placeholder: 'Cập nhật website',
    type: inputType.text,
    require: false
  },
  {
    id: 'address',
    label: 'Địa chỉ',
    placeholder: 'Khương trung, Ba đình, Hà Nội',
    type: inputType.text,
    require: false
  },
  {
    id: 'employee_info',
    label: '',
    inputsData: [
      {
        id: 'employee_quallity',
        label: 'Số lượng nhân viên',
        type: inputType.text,
        placeholder: 'Dưới 10 người'
      },
      {
        id: 'employee_quallity_recruit',
        label: 'Số lượng cần tuyển',
        type: inputType.text,
        placeholder: '5 - 10 người'
      }
    ],
    type: inputType.fromTo,
    require: false,
    noIcon: true
  },
  {
    id: 'company_desc',
    label: 'Mô tả công ty',
    placeholder: 'Nhập mô tả công ty',
    type: inputType.textarea,
    require: false
  }
];
