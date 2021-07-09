import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const isReadyRef = React.createRef<any>();

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();

export function navigate(name: string, params?: object) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
}

export function replace(name: string) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.reset({
      index: 0,
      routes: [{ name }],
    });
  }
}
