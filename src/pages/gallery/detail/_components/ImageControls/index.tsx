import { ControlsContainer, ControlButton } from './styles';

interface ImageControlsProps {
  isGrayscale: boolean;
  toggleGrayscale: () => void;
  resetTransformation: () => void;
}

/**
 * 이미지 조작 컨트롤(버튼)을 제공하는 컴포넌트
 */
const ImageControls = ({
  isGrayscale,
  toggleGrayscale,
  resetTransformation,
}: ImageControlsProps) => {
  return (
    <ControlsContainer>
      <ControlButton onClick={toggleGrayscale}>
        {isGrayscale ? '컬러로 변경' : '흑백으로 변경'}
      </ControlButton>
      <ControlButton onClick={resetTransformation}>초기화</ControlButton>
    </ControlsContainer>
  );
};

export default ImageControls;
