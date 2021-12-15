import {TextareaHTMLAttributes} from 'react';

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export interface ITextareaContainer {
  isFocused: boolean;
  isErrored?: boolean;
  isFilled: boolean;
}
