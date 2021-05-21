import { useSelector, useDispatch } from 'react-redux';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';
import { globalState } from '@/store/slices';

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => jest.fn),
    useRoute: () => ({
      params: {
        id: jest.fn
      }
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-reanimated', () =>
  jest.requireActual('../node_modules/react-native-reanimated/mock')
);

jest.mock('react-native-safe-area-context', () => {
  return {
    useSafeAreaInsets: () => {
      return {
        bottom: 0,
        top: 0
      };
    }
  };
});

jest.mock('react-redux');
useSelector.mockImplementation(fn => fn(globalState));
useDispatch.mockReturnValue(jest.fn);
