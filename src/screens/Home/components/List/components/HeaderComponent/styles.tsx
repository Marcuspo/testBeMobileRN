import styled from 'styled-components/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../../../utils/metrics';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #edeffb;
  height: ${verticalScale(47)}px;
  border-top-right-radius: ${moderateScale(8)}px;
  border-top-left-radius: ${moderateScale(8)}px;
  border: 1px solid #dfdfdf;
`;

export const ContainerLeft = styled.View`
  flex-direction: row;
  gap: ${horizontalScale(24)}px;
  padding-horizontal: ${horizontalScale(16)}px;
`;

export const TextLeft = styled.Text`
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: ${moderateScale(16)}px;
`;

export const ContainerRight = styled.View`
  padding-horizontal: ${horizontalScale(20)}px;
`;

export const DotRight = styled.View`
  width: ${horizontalScale(8)}px;
  height: ${verticalScale(8)}px;
  background-color: #1c1c1c;
  border-radius: 100px;
`;
