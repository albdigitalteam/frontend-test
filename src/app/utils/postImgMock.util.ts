const base = 'assets/imgs/postsImgs/img';

export const getRandomImgPost = () => {
  const imgNumber = Math.floor((Math.random() * (9 - 0 + 1)) + 0);

  return `${base}${imgNumber}.jpg`;
};
