import React, { useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner/index';
import { useImageStore } from '@/store/imageStore';
import { useImageDetail } from '@/hooks/useImageDetail';
import { useCanvasInteraction } from '@/hooks/useCanvasInteraction';
import { useCanvasRenderer } from '@/hooks/useCanvasRenderer';
import { DetailContainer, Title, BackButton } from './index.styles';
import ImageCanvas from './_components/ImageCanvas';
import ImageControls from './_components/ImageControls';
import ImageInfo from './_components/ImageInfo';
import ErrorDisplay from './_components/ErrorDisplay';

/**
 * 이미지 상세 정보 페이지 컴포넌트
 */
const ImageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 이미지 전역 상태 (흑백, 확대/축소, 회전)
  const {
    isGrayscale,
    scale,
    rotation,
    toggleGrayscale,
    setScale,
    setRotation,
    resetTransformation,
  } = useImageStore();

  // 이미지 로딩 및 정보 관리
  const { image, originalImage, loading, error, loadImage } = useImageDetail({
    imageId: id,
  });

  // 페이지 로드 시 이미지 로드
  React.useEffect(() => {
    resetTransformation();
    loadImage();
  }, [resetTransformation, loadImage]);

  // 캔버스 렌더링 관리
  useCanvasRenderer({
    canvasRef,
    image: originalImage,
    scale,
    rotation,
    isGrayscale,
  });

  // 캔버스 상호작용 (마우스 이벤트) 관리
  const { handleMouseDown, handleMouseMove, handleMouseUp, handleContextMenu } =
    useCanvasInteraction({
      canvasRef,
      scale,
      rotation,
      setScale,
      setRotation,
    });

  // 뒤로 가기 핸들러
  const handleBackToList = useCallback(() => {
    navigate('/');
  }, [navigate]);

  // 로딩 중 표시
  if (loading && !image) {
    return <LoadingSpinner />;
  }

  // 에러 표시
  if (error || !image) {
    return <ErrorDisplay error={error} onBackClick={handleBackToList} />;
  }

  // 메인 화면 렌더링
  return (
    <DetailContainer>
      <Title>{image.author}의 이미지</Title>
      <ImageControls
        isGrayscale={isGrayscale}
        toggleGrayscale={toggleGrayscale}
        resetTransformation={resetTransformation}
      />
      <ImageCanvas
        canvasRef={canvasRef}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        handleContextMenu={handleContextMenu}
      />
      <ImageInfo
        image={image}
        scale={scale}
        rotation={rotation}
        isGrayscale={isGrayscale}
      />
      <BackButton onClick={handleBackToList}>목록으로 돌아가기</BackButton>
    </DetailContainer>
  );
};

export default ImageDetailPage;
