import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
  errorImg?: string;
}

export default ({ src, placeholderImg, errorImg, ...props }: ImageProps) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);
    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [src, onLoad, onError]);

  return <S.Img {...props} alt={imgSrc!} src={imgSrc!} />;
};
