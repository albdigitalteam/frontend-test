import 'styled-components';

import { Colors } from '../src/theme/colors';
import { FontSizes, NormalizeWidth, NormalizeHeight, WindowSizes } from '../src/theme/sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    windowSizes: WindowSizes;
    fontSizes: FontSizes;
    normalizeWidth: NormalizeWidth;
    normalizeHeight: NormalizeHeight;
  }
}