import React, {useState} from 'react';
import {PropsItem} from '../..';
import * as Styles from './styles';
import Icons from '@react-native-vector-icons/entypo';
import {format} from 'date-fns';
import {LayoutAnimation} from 'react-native';

const RenderItem = ({item}: PropsItem) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^55(\d{2})(\d{4,5})(\d{4})$/);

    if (match) {
      const intlCode = '+55';
      const ddd = match[1];
      const firstPart = match[2];
      const secondPart = match[3];
      return `${intlCode} (${ddd}) ${firstPart}-${secondPart}`;
    }

    return phone;
  };

  return (
    <>
      <Styles.Container onPress={toggleOpen}>
        <Styles.ContainerLeft>
          <Styles.Image source={{uri: item.image}} />
          <Styles.TextLeft numberOfLines={1} ellipsizeMode="middle">
            {item.name}
          </Styles.TextLeft>
        </Styles.ContainerLeft>

        <Styles.ContainerRight>
          <Icons
            name={open ? 'chevron-thin-up' : 'chevron-thin-down'}
            size={28}
            color={'#0500FF'}
          />
        </Styles.ContainerRight>
      </Styles.Container>
      {open && (
        <Styles.ContainerDetails>
          <Styles.ContainerDetailsLeft>
            <Styles.TextDetailsLeft>Cargo</Styles.TextDetailsLeft>
            <Styles.TextDetailsLeft>Data de admissão</Styles.TextDetailsLeft>
            <Styles.TextDetailsLeft>Telefone</Styles.TextDetailsLeft>
          </Styles.ContainerDetailsLeft>

          <Styles.ContainerDetailsRight>
            <Styles.TextDetailsRight>{item.job}</Styles.TextDetailsRight>
            <Styles.TextDetailsRight>
              {format(item.admission_date, 'dd/MM/yyyy')}
            </Styles.TextDetailsRight>
            <Styles.TextDetailsRight>
              {formatPhoneNumber(item.phone)}
            </Styles.TextDetailsRight>
          </Styles.ContainerDetailsRight>
        </Styles.ContainerDetails>
      )}
    </>
  );
};

export default RenderItem;
