import { useState } from 'react';
import { GiCardAceSpades } from 'react-icons/gi';
import { GameResult as GameResultType, Player, Step } from './_types/types';
import PlayerCountForm from './_components/PlayerCountForm';
import PlayerNamesForm from './_components/PlayerNamesForm';
import CardCountForm from './_components/CardCountForm';
import GameResult from './_components/GameResult';
import { Container, Title, IconWrapper } from './styles';

const CardGame = () => {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [cardCount, setCardCount] = useState<number>(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [step, setStep] = useState<Step>('playerCount');
  const [result, setResult] = useState<GameResultType | null>(null);

  const handlePlayerCountSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (playerCount < 2 || playerCount > 4) {
      alert('플레이어는 2명에서 4명까지 입력 가능합니다.');
      return;
    }

    const initialPlayers = Array.from({ length: playerCount }, (_, i) => ({
      id: i + 1,
      name: `Player ${i + 1}`,
      cards: [],
      score: 0,
    }));

    setPlayers(initialPlayers);
    setStep('playerNames');
  };

  const handlePlayerNameChange = (id: number, name: string) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, name: name || `Player ${id}` } : player
    );
    setPlayers(updatedPlayers);
  };

  const handlePlayerNamesSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('cardCount');
  };

  const handleCardCountSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardCount < 1 || cardCount > 10) {
      alert('카드는 1장에서 10장까지 입력 가능합니다.');
      return;
    }

    // 게임 로직 실행
    const updatedPlayers = players.map((player) => {
      const cards: number[] = [];

      // 랜덤 카드 생성 (1~20 사이의 값)
      for (let j = 0; j < cardCount; j++) {
        const randomCard = Math.floor(Math.random() * 20) + 1;
        cards.push(randomCard);
      }

      // 카드 점수 계산 (합계)
      const score = cards.reduce((sum, card) => sum + card, 0);

      return {
        ...player,
        cards,
        score,
      };
    });

    // 승자 결정 - 점수가 같을 경우 후순위 플레이어가 이기게 됨
    let winner = updatedPlayers[0];

    for (let i = 1; i < updatedPlayers.length; i++) {
      if (updatedPlayers[i].score >= winner.score) {
        winner = updatedPlayers[i];
      }
    }

    setResult({
      players: updatedPlayers,
      winner,
    });

    setStep('result');
  };

  const handleRestart = () => {
    setPlayerCount(0);
    setCardCount(0);
    setPlayers([]);
    setStep('playerCount');
    setResult(null);
  };

  const renderContent = () => {
    switch (step) {
      case 'playerCount':
        return (
          <PlayerCountForm
            playerCount={playerCount}
            onPlayerCountChange={setPlayerCount}
            onSubmit={handlePlayerCountSubmit}
          />
        );
      case 'playerNames':
        return (
          <PlayerNamesForm
            players={players}
            onPlayerNameChange={handlePlayerNameChange}
            onSubmit={handlePlayerNamesSubmit}
          />
        );
      case 'cardCount':
        return (
          <CardCountForm
            cardCount={cardCount}
            onCardCountChange={setCardCount}
            onSubmit={handleCardCountSubmit}
          />
        );
      case 'result':
        return (
          result && <GameResult result={result} onRestart={handleRestart} />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Title>
        <IconWrapper>
          <GiCardAceSpades />
        </IconWrapper>
        카드 게임
      </Title>

      {renderContent()}
    </Container>
  );
};

export default CardGame;
