import React from 'react';
import {SvgProps} from 'react-native-svg';
import {icons} from '../../assets/icons';

interface Props {
  name: keyof typeof icons;
  color?: string;
}
type IconProps = SvgProps & Props;
const Icons: React.FC<IconProps> = ({name, ...rest}) => {
  const SelectedIcon = icons[name];
  return <SelectedIcon {...rest} />;
};

export default Icons;
