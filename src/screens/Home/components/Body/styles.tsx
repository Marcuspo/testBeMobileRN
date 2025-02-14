import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '../../../../utils/metrics';

export const Body = styled.View`
  padding-top: ${verticalScale(24)}px;
  padding-bottom: ${verticalScale(16)}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${moderateScale(20)}px;
  font-weight: 500;
  font-family: 'Helvetica Neue';
`;
