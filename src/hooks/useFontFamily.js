const useFontFamily = fontWeight => {
  switch (fontWeight) {
    case 100:
      return 'Poppins-Thin';
    case 200:
      return 'Poppins-Thin';
    case 300:
      return 'Poppins-Thin';
    case 400:
      return 'Poppins-Regular';
    case 500:
    case 'normal':
      return 'Poppins-Medium';
    case 600:
      return 'Poppins-SemiBold';
    case 700:
      return 'Poppins-Bold';
    case 'bold':
      return 'Poppins-Bold';
    case 800:
      return 'Poppins-ExtraBold';
    case 900:
      return 'WorkSans-Black';
    default:
      return 'WorkSans-Regular';
  }
};

export default useFontFamily;
