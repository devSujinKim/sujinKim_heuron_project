import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation, NavItem } from './styles';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (menuPath: string) => {
    if (menuPath === '/') {
      return path === '/' || /^\/\d+$/.test(path);
    }
    return path === menuPath;
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">휴런 프론트엔드 과제 - 김수진</Link>
      </Logo>
      <Navigation>
        <NavItem $active={isActive('/')}>
          <Link to="/">과제 1</Link>
        </NavItem>
        <NavItem $active={isActive('/cardgame')}>
          <Link to="/cardgame">과제 2</Link>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
