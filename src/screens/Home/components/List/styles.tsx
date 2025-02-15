import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingBottom: 200},
  showsVerticalScrollIndicator: false,
})`` as typeof FlatList;
