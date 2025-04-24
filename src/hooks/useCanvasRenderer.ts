import { useCallback, useEffect, RefObject } from 'react';
import { renderImageToCanvas } from '@/utils/canvas';

interface UseCanvasRendererProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  image: HTMLImageElement | null;
  scale: number;
  rotation: number;
  isGrayscale: boolean;
}

/**
 * 캔버스에 이미지 렌더링을 관리하는 커스텀 훅
 */
export const useCanvasRenderer = ({
  canvasRef,
  image,
  scale,
  rotation,
  isGrayscale,
}: UseCanvasRendererProps) => {
  const renderCanvas = useCallback(() => {
    if (!canvasRef.current || !image) return;

    renderImageToCanvas(canvasRef.current, image, {
      scale,
      rotation,
      isGrayscale,
    });
  }, [canvasRef, image, scale, rotation, isGrayscale]);

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  return { renderCanvas };
};
