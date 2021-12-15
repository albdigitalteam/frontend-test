import {InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons';
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export interface IInputContainer {
  isFocused: boolean;
  isErrored?: boolean;
  isFilled: boolean;
}
