import styled from 'styled-components/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';
import {TextInput} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  margin: ${moderateScale(20)}px;
`;

export const SeachContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${horizontalScale(16)}px;
  border-radius: ${moderateScale(100)}px;
  background-color: #f2f2f2;
  height: ${moderateScale(48)}px;
  margin-bottom: ${verticalScale(16)}px;
  margin-top: ${verticalScale(16)}px;
  padding-left: ${horizontalScale(16)}px;
  padding-right: ${horizontalScale(12)}px;
`;

export const SeachInput = styled.TextInput.attrs({
  placeholderTextColor: '#1C1C1C',
})`
  flex: 1;
  padding-left: ${horizontalScale(10)}px;
` as typeof TextInput;

export const ListContainer = styled.View``;
