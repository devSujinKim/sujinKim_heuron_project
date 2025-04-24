import React, { RefObject } from 'react';
import { CanvasContainer, InstructionsContainer } from './styles';

interface ImageCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  handleMouseDown: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseUp: () => void;
  handleContextMenu: (e: React.MouseEvent) => void;
}

/**
 * 이미지 캔버스 및 조작 설명을 표시하는 컴포넌트
 */
const ImageCanvas = ({
  canvasRef,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleContextMenu,
}: ImageCanvasProps) => {
  return (
    <CanvasContainer>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onContextMenu={handleContextMenu}
      />
      <InstructionsContainer>
        <p>
          <strong>조작 방법:</strong>
        </p>
        <p>• 일반 마우스 드래그: 확대/축소 (위/아래로 드래그)</p>
        <p>• 오른쪽 마우스 드래그: 회전 (좌/우로 드래그)</p>
        <p>• Ctrl + 마우스 드래그: 회전 (대체 방법)</p>
      </InstructionsContainer>
    </CanvasContainer>
  );
};

export default ImageCanvas;
