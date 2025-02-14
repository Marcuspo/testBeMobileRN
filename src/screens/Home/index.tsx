import React from 'react';
import * as Styles from './styles';
import Header from './components/Header';
import Body from './components/Body';
import Icons from '../../components/Icons';

const Home = () => {
  return (
    <Styles.Container>
      <Header />
      <Body />

      <Styles.SeachContainer>
        <Icons name="search" width={24} height={24} />
        <Styles.SeachInput placeholder="Pesquisar" />
      </Styles.SeachContainer>
    </Styles.Container>
  );
};

export default Home;
