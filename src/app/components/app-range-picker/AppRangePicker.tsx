import { DatePicker } from 'antd';
import Icon from '@ant-design/icons';
import styled from 'styled-components';
import moment from 'moment';

import { ReactComponent as CalendarIcon } from 'svg/calendar.svg';

export const AppRangePicker = styled(DatePicker.RangePicker)`
  cursor: pointer;
  padding: 1px 10px;
  width: 100%;

  .ant-picker-input {
    max-width: 68px;

    input {
      text-align: center;
    }
  }

  .ant-picker-suffix {
    margin-left: auto;
  }
`;

const RANGES_TEXT = {
  YESTERDAY: 'Вчера',
  LAST_WEEK: 'Пред. неделя',
  LAST_TWO_WEEKS: 'Пред. две недели',
  LAST_MONTH: 'Пред. месяц',
  LAST_QUARTER: 'Пред. квартал',
  LAST_YEAR: 'Пред. год'
};

AppRangePicker.defaultProps = {
  suffixIcon: <Icon component={CalendarIcon} style={{ fontSize: '15px' }} />,
  size: 'small',
  allowClear: false,
  inputReadOnly: true,
  separator: '—',
  format: 'DD.MM.YYYY',
  ranges: {
    [RANGES_TEXT.YESTERDAY]: [moment().subtract(1, 'day'), moment().subtract(1, 'day')],
    [RANGES_TEXT.LAST_WEEK]: [moment().day(-6), moment().day(0)],
    [RANGES_TEXT.LAST_TWO_WEEKS]: [moment().day(-13), moment().day(0)],
    [RANGES_TEXT.LAST_MONTH]: [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    [RANGES_TEXT.LAST_QUARTER]: [moment().subtract(1, 'quarter').startOf('quarter'), moment().subtract(1, 'quarter').endOf('quarter')],
    [RANGES_TEXT.LAST_YEAR]: [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
  }
};
