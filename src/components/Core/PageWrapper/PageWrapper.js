import React from 'react';
import GlobalHeaderContext, {
  headerDefault
} from '../../../context/GlobalHeaderContext';
import Link from '../Link';
import HeaderButton from '../Header/InnerPageHeader';
import Header from '../Header';
import { useTranslation } from 'next-i18next';

const PageWrapper = ({
  children,
  headerConfig = null,
  innerPage = false,
  innerPageFooter = false
}) => {
  const { t } = useTranslation('translations');
  const defaultHeaderConfig = {
    headerClasses:
      'site-header site-header--menu-end light-header site-header--sticky',
    containerFluid: false,
    buttonBlock: (
      // eslint-disable-next-line react/no-children-prop
      <HeaderButton
        className="d-none d-sm-flex"
        btnText={t('common.header')}
        btnLink="https://www.localistars.app/register"
      />
    )
  }

  const innerPageDefault = {
    headerClasses:
      // 'site-header site-header--menu-end light-header site-header--sticky',
      'light-header site-header--menu-end site-header--button-sep position-relative',
    containerFluid: false,
    darkLogo: true,
    buttonBlock: (
      <HeaderButton
        as={Link}
        btnText="Login"
        btnLink="https://www.localistars.app/login"
      />
    )
  };
  const activeHeader = innerPage ? innerPageDefault : { ...headerDefault, ...defaultHeaderConfig};
  const sitectx = React.useContext(GlobalHeaderContext);

  React.useEffect(() => {
    sitectx.changeHeader({ ...activeHeader, ...headerConfig });
  }, [headerConfig]);
  return (
    <>
      {/* <Header/> */}
      {children}
    </>
  );
};

export default PageWrapper;
