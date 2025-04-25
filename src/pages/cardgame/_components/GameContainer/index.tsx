import { GiCardAceSpades } from 'react-icons/gi';
import { Container, Title, IconWrapper } from '../../styles';

interface GameContainerProps {
  title: string;
  children: React.ReactNode;
}

const GameContainer = ({ title, children }: GameContainerProps) => {
  return (
    <Container>
      <Title>
        <IconWrapper>
          <GiCardAceSpades />
        </IconWrapper>
        {title}
      </Title>
      {children}
    </Container>
  );
};

export default GameContainer;
