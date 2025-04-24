import { useState, useCallback, useEffect, RefObject } from 'react';

interface UseCanvasInteractionProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  scale: number;
  rotation: number;
  setScale: (scale: number) => void;
  setRotation: (rotation: number) => void;
}

interface UseCanvasInteractionReturn {
  handleMouseDown: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  handleMouseUp: () => void;
  handleContextMenu: (e: React.MouseEvent) => void;
}

/**
 * 캔버스 상호작용(마우스 드래그, 확대/축소, 회전)을 관리하는 커스텀 훅
 */
export const useCanvasInteraction = ({
  canvasRef,
  scale,
  rotation,
  setScale,
  setRotation,
}: UseCanvasInteractionProps): UseCanvasInteractionReturn => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isRightClick, setIsRightClick] = useState<boolean>(false);

  // 컨텍스트 메뉴 방지
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventContextMenu = (e: Event) => e.preventDefault();
    canvas.addEventListener('contextmenu', preventContextMenu);

    return () => {
      canvas.removeEventListener('contextmenu', preventContextMenu);
    };
  }, [canvasRef]);

  // 마우스 다운 이벤트 핸들러
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      setIsRightClick(e.button === 2 || e.ctrlKey);

      if (e.button === 2) {
        e.preventDefault();
      }
    },
    []
  );

  // 마우스 이동 이벤트 핸들러
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDragging) return;

      const { clientX, clientY } = e;
      const deltaX = clientX - dragStart.x;
      const deltaY = clientY - dragStart.y;

      if (isRightClick) {
        // 회전
        const newRotation = rotation + deltaX * 0.5;
        setRotation(newRotation);
      } else {
        // 확대/축소
        const newScale = Math.max(0.1, scale - deltaY * 0.01);
        setScale(newScale);
      }

      setDragStart({ x: clientX, y: clientY });
    },
    [
      isDragging,
      isRightClick,
      dragStart,
      setRotation,
      setScale,
      rotation,
      scale,
    ]
  );

  // 마우스 업 이벤트 핸들러
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsRightClick(false);
  }, []);

  // 컨텍스트 메뉴 이벤트 핸들러
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleContextMenu,
  };
};
