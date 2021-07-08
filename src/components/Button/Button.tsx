import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {ColorProps, createBox, useTheme} from '@shopify/restyle';

import Text from '@components/Text/Text';
import {Theme} from '@theme/theme';

type TouchableProps = TouchableOpacityProps & {
  children?: React.ReactNode;
};

const BaseButton = createBox<Theme, TouchableProps>(TouchableOpacity);

type Props = React.ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {
    label: string;
    isLoading?: boolean;
  };

export default function Button({label, isLoading, color, ...props}: Props) {
  const theme = useTheme<Theme>();

  return (
    <BaseButton
      flexDirection="row"
      {...props}
      disabled={isLoading}
      alignItems="center"
      justifyContent="center">
      <Text
        variant="body"
        color={color}
        textAlign="center"
        marginRight={isLoading ? 's' : undefined}>
        {label}
      </Text>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.purplePrimary} />
      ) : null}
    </BaseButton>
  );
}
