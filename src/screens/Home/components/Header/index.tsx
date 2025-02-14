import Icons from '../../../../components/Icons';
import * as Styles from './styles';

function Header() {
  return (
    <Styles.Header>
      <Styles.IconLeft>
        <Styles.TextIconRight>CG</Styles.TextIconRight>
      </Styles.IconLeft>
      <Styles.IconRight>
        <Icons name="bell-notification" width={36} height={37} />
        <Styles.Notification>
          <Styles.TextIconRightBell>02</Styles.TextIconRightBell>
        </Styles.Notification>
      </Styles.IconRight>
    </Styles.Header>
  );
}

export default Header;
