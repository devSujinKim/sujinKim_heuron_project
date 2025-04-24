import { ImageItem, getImageThumbnail } from '@/api/galleryApi';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  ThumbnailCell,
  ThumbnailContainer,
} from './styles';

interface ImageListProps {
  images: ImageItem[];
  onSelectImage: (image: ImageItem) => void;
}

const ImageList = ({ images, onSelectImage }: ImageListProps) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeader>썸네일</TableHeader>
          <TableHeader>ID</TableHeader>
          <TableHeader>작가</TableHeader>
          <TableHeader>크기</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {images.map((image) => (
          <TableRow key={image.id} onClick={() => onSelectImage(image)}>
            <ThumbnailCell>
              <ThumbnailContainer>
                <img src={getImageThumbnail(image.id)} alt={image.author} />
              </ThumbnailContainer>
            </ThumbnailCell>
            <TableCell>{image.id}</TableCell>
            <TableCell>{image.author}</TableCell>
            <TableCell>{`${image.width} x ${image.height}`}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ImageList;
