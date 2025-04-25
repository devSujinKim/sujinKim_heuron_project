import { FaUser, FaPlay } from 'react-icons/fa';
import { Player } from '../../_types/types';
import { Form, Label, Input, Button, IconWrapper } from '../../styles';

interface PlayerNamesFormProps {
  players: Player[];
  onPlayerNameChange: (id: number, name: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PlayerNamesForm = ({
  players,
  onPlayerNameChange,
  onSubmit,
}: PlayerNamesFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <IconWrapper>
          <FaUser />
        </IconWrapper>
        플레이어 이름 설정
      </Label>

      {players.map((player) => (
        <div key={player.id}>
          <Label htmlFor={`playerName${player.id}`}>
            플레이어 {player.id} 이름
          </Label>
          <Input
            type="text"
            id={`playerName${player.id}`}
            value={player.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPlayerNameChange(player.id, e.target.value)
            }
            placeholder={`Player ${player.id}`}
          />
        </div>
      ))}

      <Button type="submit">
        <IconWrapper>
          <FaPlay />
        </IconWrapper>
        다음
      </Button>
    </Form>
  );
};

export default PlayerNamesForm;
