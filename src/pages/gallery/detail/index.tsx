import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ImageItem, getOriginalImage, fetchImageList } from '@/api/galleryApi';
import LoadingSpinner from '@/components/LoadingSpinner/index';
import { useImageStore } from '@/store/imageStore';
import {
  DetailContainer,
  Title,
  CanvasContainer,
  InfoContainer,
  InfoRow,
  InfoLabel,
  InfoValue,
  BackButton,
  CanvasControls,
  ControlButton,
  NoImageText,
} from './index.styles';

const ImageDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<ImageItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(
    null
  );
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isRightClick, setIsRightClick] = useState<boolean>(false);

  const {
    isGrayscale,
    scale,
    rotation,
    toggleGrayscale,
    setScale,
    setRotation,
    resetTransformation,
  } = useImageStore();

  const fetchImage = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const imageList = await fetchImageList();
      const foundImage = imageList.find((img) => img.id === id);

      if (foundImage) {
        setImage(foundImage);
      } else {
        setError('이미지를 찾을 수 없습니다.');
      }
    } catch (err) {
      console.error('이미지를 불러오는 중 오류 발생:', err);
      setError('이미지를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    resetTransformation();
    fetchImage();
  }, [fetchImage, resetTransformation]);

  useEffect(() => {
    if (!image || !canvasRef.current) return;

    setLoading(true);

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      setOriginalImage(img);
      setLoading(false);
    };

    img.onerror = (error) => {
      console.error('이미지 로딩 오류:', error);
      setError('이미지를 불러올 수 없습니다.');
      setLoading(false);
    };

    // 이미지 URL 설정
    img.src = getOriginalImage(image.id);
  }, [image]);

  const adjustToCanvasSize = (width: number, height: number) => {
    const maxWidth = 800;
    const maxHeight = 600;
    const aspectRatio = width / height;

    let newWidth = width;
    let newHeight = height;

    if (newWidth > maxWidth) {
      newWidth = maxWidth;
      newHeight = newWidth / aspectRatio;
    }

    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = newHeight * aspectRatio;
    }

    return { width: newWidth, height: newHeight };
  };

  const applyGrayscaleFilter = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // R
      data[i + 1] = avg; // G
      data[i + 2] = avg; // B
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const renderCanvas = useCallback(() => {
    if (!canvasRef.current || !originalImage) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 크기 조정
    const dimensions = adjustToCanvasSize(
      originalImage.width,
      originalImage.height
    );
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // 캔버스 초기화 및 이미지 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 변환 적용
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(scale, scale);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // 필터 적용
    if (isGrayscale) {
      applyGrayscaleFilter(ctx, canvas.width, canvas.height);
    }
  }, [originalImage, isGrayscale, scale, rotation]);

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  // 컨텍스트 메뉴 방지
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preventContextMenu = (e: Event) => e.preventDefault();
    canvas.addEventListener('contextmenu', preventContextMenu);

    return () => {
      canvas.removeEventListener('contextmenu', preventContextMenu);
    };
  }, []);

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

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsRightClick(false);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleBackToList = () => {
    navigate('/');
  };

  if (loading && !image) {
    return <LoadingSpinner />;
  }

  if (error || !image) {
    return (
      <>
        <NoImageText>{error || '이미지를 찾을 수 없습니다.'}</NoImageText>
        <BackButton onClick={handleBackToList}>목록으로 돌아가기</BackButton>
      </>
    );
  }

  return (
    <DetailContainer>
      <Title>{image.author}의 이미지</Title>

      <CanvasControls>
        <ControlButton onClick={toggleGrayscale}>
          {isGrayscale ? '컬러로 변경' : '흑백으로 변경'}
        </ControlButton>
        <ControlButton onClick={resetTransformation}>초기화</ControlButton>
      </CanvasControls>

      <CanvasContainer>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onContextMenu={handleContextMenu}
            />
            <div>
              <p>
                <strong>조작 방법:</strong>
              </p>
              <p>• 일반 마우스 드래그: 확대/축소 (위/아래로 드래그)</p>
              <p>• 오른쪽 마우스 드래그: 회전 (좌/우로 드래그)</p>
              <p>• Ctrl + 마우스 드래그: 회전 (대체 방법)</p>
            </div>
          </>
        )}
      </CanvasContainer>

      <InfoContainer>
        <InfoRow>
          <InfoLabel>ID:</InfoLabel>
          <InfoValue>{image.id}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>작가:</InfoLabel>
          <InfoValue>{image.author}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>원본 크기:</InfoLabel>
          <InfoValue>
            {image.width} x {image.height} 픽셀
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>원본 URL:</InfoLabel>
          <InfoValue>
            <a
              href={image.download_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image.download_url}
            </a>
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>현재 상태:</InfoLabel>
          <InfoValue>
            {isGrayscale ? '흑백' : '컬러'} | 확대: {(scale * 100).toFixed(0)}%
            | 회전: {rotation.toFixed(0)}°
          </InfoValue>
        </InfoRow>
      </InfoContainer>

      <BackButton onClick={handleBackToList}>목록으로 돌아가기</BackButton>
    </DetailContainer>
  );
};

export default ImageDetailPage;
