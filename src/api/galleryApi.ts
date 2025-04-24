import axios from 'axios';

export interface ImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const BASE_URL = 'https://picsum.photos';

export const fetchImageList = async (): Promise<ImageItem[]> => {
  try {
    const response = await axios.get<ImageItem[]>(`${BASE_URL}/v2/list`);
    return response.data;
  } catch (error) {
    console.error('이미지 목록을 불러오는 중 오류가 발생했습니다.', error);
    throw error;
  }
};

export const getImageThumbnail = (
  id: string,
  width = 100,
  height = 100
): string => {
  return `${BASE_URL}/id/${id}/${width}/${height}`;
};

export const getOriginalImage = (id: string): string => {
  return `${BASE_URL}/id/${id}/800/600`;
};
