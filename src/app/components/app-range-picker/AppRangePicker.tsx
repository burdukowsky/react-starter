import { DatePicker } from 'antd';
import Icon from '@ant-design/icons';
import styled from 'styled-components';

import { ReactComponent as CalendarIcon } from 'svg/calendar.svg';

export const AppRangePicker = styled(DatePicker.RangePicker)`
  cursor: pointer;
  padding: 1px 10px;
`;

AppRangePicker.defaultProps = {
  suffixIcon: <Icon component={CalendarIcon} style={{ fontSize: '15px' }} />,
  size: 'small',
  allowClear: false,
  inputReadOnly: true,
};
