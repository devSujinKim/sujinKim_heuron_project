import { theme } from '@/styles/theme';
import styled from 'styled-components';

interface NavItemProps {
  $active: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 8px;
`;

export const NavItem = styled.div<NavItemProps>`
  position: relative;

  a {
    color: ${({ $active }) =>
      $active ? theme.colors.primary : theme.colors.secondary};
    font-weight: ${({ $active }) => ($active ? '600' : '400')};

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.primary};
    transform: scaleX(${({ $active }) => ($active ? '1' : '0')});
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
