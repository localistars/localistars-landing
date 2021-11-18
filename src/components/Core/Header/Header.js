import React, { useContext, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Container } from 'react-bootstrap';
import GlobalHeaderContext from '~context/GlobalHeaderContext';
import SiteNav from './SiteNav';
import SiteHeader from './style';

const Header = () => {
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);
  const headerContext = useContext(GlobalHeaderContext);
  const header = headerContext.header;
  // console.log(headerContext)
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <SiteHeader
      className={`${header.headerClasses} ${showScrolling ? 'scrolling' : ''} ${
        showReveal ? 'reveal-header ' : ''
      }`}
    >
      <Container fluid={header.containerFluid ? true : false}>
        <SiteNav
          defaultLogo={header.defaultLogo}
          customLogo={header.customLogo}
          darkLogo={header.darkLogo}
          buttonBlock={header.buttonBlock}
        />
      </Container>
    </SiteHeader>
  );
};
export default Header;
