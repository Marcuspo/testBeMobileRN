import React from 'react';
import * as Styles from './styles';
import HeaderComponent from './components/HeaderComponent';
import RenderItem from './components/RenderItem';
import {ActivityIndicator} from 'react-native';

export interface PropsItem {
  item: {
    admission_date: string;
    id: string;
    image: string;
    job: string;
    name: string;
    phone: string;
  };
}

interface ListProps {
  employees: PropsItem['item'][];
  loading: boolean;
}

function List({employees, loading}: ListProps) {
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Styles.List
          ListHeaderComponent={<HeaderComponent />}
          renderItem={({item}: PropsItem) => <RenderItem item={item} />}
          keyExtractor={item => item.id}
          data={employees}
        />
      )}
    </>
  );
}

export default List;
