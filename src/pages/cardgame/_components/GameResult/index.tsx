import { FaUser, FaRedo, FaTrophy } from 'react-icons/fa';
import { GiCardAceSpades } from 'react-icons/gi';
import { GameResult as GameResultType } from '../../_types/types';
import {
  ResultContainer,
  ResultTitle,
  ResultContent,
  CardList,
  IconWrapper,
  Button,
} from '../../styles';
import {
  ResultItem,
  PlayerListTitle,
  PlayerListItem,
  TrophyIcon,
} from './styles';

interface GameResultProps {
  result: GameResultType;
  onRestart: () => void;
}

const GameResult = ({ result, onRestart }: GameResultProps) => {
  const { winner } = result;

  return (
    <ResultContainer>
      <ResultTitle>
        <IconWrapper>
          <GiCardAceSpades />
        </IconWrapper>
        게임 결과
      </ResultTitle>
      <ResultContent>
        <ResultItem>
          <TrophyIcon>
            <FaTrophy />
          </TrophyIcon>
          - 승자 : {winner.name}
        </ResultItem>
        <ResultItem>- 점수 : {winner.score}</ResultItem>
        <ResultItem>
          - 보유카드 : <CardList>{winner.cards.join(', ')}</CardList>
        </ResultItem>

        <PlayerListTitle>전체 플레이어 점수</PlayerListTitle>

        {result.players.map((player) => (
          <PlayerListItem key={player.id} $isWinner={player.id === winner.id}>
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            {player.name}: {player.score}점 (카드: {player.cards.join(', ')})
          </PlayerListItem>
        ))}
      </ResultContent>
      <Button onClick={onRestart}>
        <IconWrapper>
          <FaRedo />
        </IconWrapper>
        다시 시작
      </Button>
    </ResultContainer>
  );
};

export default GameResult;
