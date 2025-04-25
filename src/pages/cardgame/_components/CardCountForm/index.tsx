import { FaPlay } from 'react-icons/fa';
import { GiCardRandom } from 'react-icons/gi';
import { Form, Label, Input, Button, IconWrapper } from '../../styles';

interface CardCountFormProps {
  cardCount: number;
  onCardCountChange: (count: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CardCountForm = ({
  cardCount,
  onCardCountChange,
  onSubmit,
}: CardCountFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="cardCount">
        <IconWrapper>
          <GiCardRandom />
        </IconWrapper>
        카드 수 (1-10장)
      </Label>
      <Input
        type="number"
        id="cardCount"
        value={cardCount || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onCardCountChange(Number(e.target.value))
        }
        min={1}
        max={10}
        required
      />
      <Button type="submit">
        <IconWrapper>
          <FaPlay />
        </IconWrapper>
        게임 시작
      </Button>
    </Form>
  );
};

export default CardCountForm;
