import { ImageItem } from '@/api/galleryApi';
import { InfoContainer, InfoRow, InfoLabel, InfoValue } from './styles';

interface ImageInfoProps {
  image: ImageItem;
  scale: number;
  rotation: number;
  isGrayscale: boolean;
}

/**
 * 이미지 상세 정보를 표시하는 컴포넌트
 */
const ImageInfo = ({ image, scale, rotation, isGrayscale }: ImageInfoProps) => {
  return (
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
          {isGrayscale ? '흑백' : '컬러'} | 확대: {(scale * 100).toFixed(0)}% |
          회전: {rotation.toFixed(0)}°
        </InfoValue>
      </InfoRow>
    </InfoContainer>
  );
};

export default ImageInfo;
