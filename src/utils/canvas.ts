/**
 * 이미지 크기를 캔버스 크기에 맞게 조정하는 함수
 */
export const adjustToCanvasSize = (width: number, height: number) => {
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

/**
 * 이미지에 흑백 필터를 적용하는 함수
 */
export const applyGrayscaleFilter = (
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

/**
 * 캔버스에 이미지 렌더링 및 변환 적용 함수
 */
export const renderImageToCanvas = (
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  options: {
    scale: number;
    rotation: number;
    isGrayscale: boolean;
  }
) => {
  const { scale, rotation, isGrayscale } = options;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 캔버스 크기 조정
  const dimensions = adjustToCanvasSize(image.width, image.height);
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
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.restore();

  // 필터 적용
  if (isGrayscale) {
    applyGrayscaleFilter(ctx, canvas.width, canvas.height);
  }
};
