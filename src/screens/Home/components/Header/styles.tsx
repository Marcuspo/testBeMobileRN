import styled from 'styled-components/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../utils/metrics';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconLeft = styled.TouchableOpacity`
  width: ${horizontalScale(45)}px;
  height: ${verticalScale(45)}px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 106px;
`;

export const TextIconRight = styled.Text`
  color: black;
`;

export const IconRight = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Notification = styled.View`
  width: ${horizontalScale(20)}px;
  height: ${verticalScale(20)}px;
  background-color: blue;
  border-radius: 100px;
  align-items: center;
  align-items: center;
  margin-left: ${horizontalScale(-20)}px;
  margin-top: ${horizontalScale(-20)}px;
`;

export const TextIconRightBell = styled.Text`
  align-items: center;
  margin-top: ${verticalScale(2)}px;
  font-size: ${moderateScale(10)}px;
  color: white;
`;
