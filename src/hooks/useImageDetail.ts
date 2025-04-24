import { useState, useEffect, useCallback } from 'react';
import { ImageItem, fetchImageList, getOriginalImage } from '@/api/galleryApi';

interface UseImageDetailProps {
  imageId: string | undefined;
}

interface UseImageDetailReturn {
  image: ImageItem | null;
  originalImage: HTMLImageElement | null;
  loading: boolean;
  error: string | null;
  loadImage: () => Promise<void>;
}

/**
 * 이미지 상세 정보를 로드하고 관리하는 커스텀 훅
 */
export const useImageDetail = ({
  imageId,
}: UseImageDetailProps): UseImageDetailReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<ImageItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(
    null
  );

  const loadImage = useCallback(async () => {
    if (!imageId) return;

    try {
      setLoading(true);
      setError(null);

      const imageList = await fetchImageList();
      const foundImage = imageList.find((img) => img.id === imageId);

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
  }, [imageId]);

  useEffect(() => {
    if (!image) return;

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

    img.src = getOriginalImage(image.id);
  }, [image]);

  return { image, originalImage, loading, error, loadImage };
};
