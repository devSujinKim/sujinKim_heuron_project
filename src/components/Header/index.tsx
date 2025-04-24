import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, Logo, Navigation, NavItem } from './styles';

const Header = () => {
  const location = useLocation();

  // 현재 경로의 첫 번째 부분 추출
  const currentPathSegment = location.pathname.split('/')[1];

  // 메인 경로 또는 숫자로만 이루어진 경로인 경우 활성화
  const isHomeActive =
    currentPathSegment === '' || /^\d+$/.test(currentPathSegment);

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">휴런 프론트엔드 과제 - 김수진</Link>
      </Logo>
      <Navigation>
        <NavItem $active={isHomeActive}>
          <Link to="/">과제 1</Link>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
