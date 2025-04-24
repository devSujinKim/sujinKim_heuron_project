import { ErrorText, BackButton } from './styles';

interface ErrorDisplayProps {
  error: string | null;
  onBackClick: () => void;
}

const ErrorDisplay = ({ error, onBackClick }: ErrorDisplayProps) => {
  return (
    <>
      <ErrorText>{error || '이미지를 찾을 수 없습니다.'}</ErrorText>
      <BackButton onClick={onBackClick}>목록으로 돌아가기</BackButton>
    </>
  );
};

export default ErrorDisplay;
