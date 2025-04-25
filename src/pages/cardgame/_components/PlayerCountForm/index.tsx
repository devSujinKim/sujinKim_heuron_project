import { FaUser, FaPlay } from 'react-icons/fa';
import { Form, Label, Input, Button, IconWrapper } from '../../styles';

interface PlayerCountFormProps {
  playerCount: number;
  onPlayerCountChange: (count: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PlayerCountForm = ({
  playerCount,
  onPlayerCountChange,
  onSubmit,
}: PlayerCountFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="playerCount">
        <IconWrapper>
          <FaUser />
        </IconWrapper>
        플레이어 수 (2-4명)
      </Label>
      <Input
        type="number"
        id="playerCount"
        value={playerCount || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onPlayerCountChange(Number(e.target.value))
        }
        min={2}
        max={4}
        required
      />
      <Button type="submit">
        <IconWrapper>
          <FaPlay />
        </IconWrapper>
        다음
      </Button>
    </Form>
  );
};

export default PlayerCountForm;
