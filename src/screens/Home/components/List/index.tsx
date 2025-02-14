import React from 'react';
import * as Styles from './styles';
import {Text} from 'react-native';
import HeaderComponent from './components/HeaderComponent';

interface PropsItem {
  item: {
    id: string;
    name: string;
  };
}

function List() {
  return (
    <Styles.List
      ListHeaderComponent={<HeaderComponent />}
      renderItem={({item}: PropsItem) => <Text>{item.name}</Text>}
      data={[
        {id: '1', name: 'John Doe'},
        {id: '2', name: 'Jane Doe'},
        {id: '3', name: 'Michael Doe'},
      ]}
    />
  );
}

export default List;
