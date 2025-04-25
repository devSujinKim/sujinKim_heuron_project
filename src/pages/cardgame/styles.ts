import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 32px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(44, 62, 80, 0.2);
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;

export const ResultContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const ResultTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const ResultContent = styled.div`
  margin-bottom: 20px;
`;

export const CardList = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 4px;
`;
