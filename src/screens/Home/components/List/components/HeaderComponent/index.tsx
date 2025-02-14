import React from 'react';
import * as Styles from './styles';

function HeaderComponent() {
  return (
    <Styles.Container>
      <Styles.ContainerLeft>
        <Styles.TextLeft>Foto</Styles.TextLeft>
        <Styles.TextLeft>Nome</Styles.TextLeft>
      </Styles.ContainerLeft>
      <Styles.ContainerRight>
        <Styles.DotRight />
      </Styles.ContainerRight>
    </Styles.Container>
  );
}

export default HeaderComponent;
