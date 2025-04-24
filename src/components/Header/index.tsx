import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation, NavItem } from './styles';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">휴런 프론트엔드 과제 - 김수진</Link>
      </Logo>
      <Navigation>
        <NavItem $active={location.pathname === '/'}>
          <Link to="/">과제 1</Link>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
