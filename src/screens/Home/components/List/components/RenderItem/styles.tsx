import styled from 'styled-components/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../../../utils/metrics';
import {Text, TouchableOpacity} from 'react-native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${verticalScale(60)}px;
  border: 1px solid #dfdfdf;
` as typeof TouchableOpacity;

export const ContainerLeft = styled.View`
  flex: 1;
  flex-direction: row;
  gap: ${moderateScale(24)}px;
  padding-horizontal: ${moderateScale(16)}px;
`;

export const TextLeft = styled.Text`
  font-family: 'Helvetica Neue';
  font-weight: 400;
  flex: 1;
  font-size: ${moderateScale(16)}px;
  color: #1c1c1c;
` as typeof Text;

export const ContainerRight = styled.View`
  padding-horizontal: ${moderateScale(15)}px;
`;

export const Image = styled.Image`
  width: ${horizontalScale(34)}px;
  height: ${verticalScale(34)}px;
  border-radius: ${moderateScale(30)}px;
`;

export const ContainerDetailsLeft = styled.View`
  flex: 1;
  gap: ${verticalScale(15)}px;
`;
export const ContainerDetailsRight = styled(ContainerDetailsLeft)``;

export const ContainerDetails = styled.View`
  flex: 1;
  /* background-color: red; */
  background-color: #ffffff;
  align-items: center;
  padding-horizontal: ${moderateScale(16)}px;
  padding-vertical: ${verticalScale(31)}px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextDetailsLeft = styled.Text`
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: ${moderateScale(16)}px;
  color: #1c1c1c;

  border-bottom-width: 1px;
  border-bottom-style: dashed;
  border-bottom-color: #dfdfdf;
`;

export const TextDetailsRight = styled(TextDetailsLeft)`
  text-align: right;
  font-weight: 400;
`;
