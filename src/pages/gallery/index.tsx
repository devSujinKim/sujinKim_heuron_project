import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchImageList, ImageItem } from '@/api/galleryApi';
import LoadingSpinner from '@/components/LoadingSpinner';
import ImageList from './_components/ImageList';
import { ErrorMessage } from './index.styles';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<ImageItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchImageList();
        setImages(data);
      } catch (err) {
        console.error('이미지 로드에 문제가 있습니다.', err);
        setError(
          '이미지를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleSelectImage = (image: ImageItem) => {
    navigate(`/${image.id}`);
  };

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ImageList images={images} onSelectImage={handleSelectImage} />
      )}
    </>
  );
};

export default GalleryPage;
