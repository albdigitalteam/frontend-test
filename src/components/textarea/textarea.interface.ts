import {TextareaHTMLAttributes} from 'react';

export type ITextarea = TextareaHTMLAttributes<HTMLTextAreaElement>

export interface ITextareaContainer {
  isFocused: boolean;
  isFilled: boolean;
}
