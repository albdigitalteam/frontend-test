import React, { FC, useRef, useEffect, useCallback, useState } from 'react';
import { TextInput, TextInputProps, GestureResponderEvent } from 'react-native';

import { useField } from '@unform/core';

import { BoxInput, BoxIcon, ContainerInput, InputLabel, InputStyled, InputInfo } from './styled';

interface InputProps extends TextInputProps {
	name: string;
	label?: string;
	rightIcon?: React.ReactNode;
	inputWidth: number;
	border?: boolean;
	rightAction?: (event: GestureResponderEvent) => void
  }
  interface InputReference extends TextInput {
	value: string;
  }

const Input: FC<InputProps> = ({ name, label, onChangeText, rightIcon, rightAction, inputWidth, border, ...rest }) => {
	const inputRef = useRef<InputReference>(null)
	const [focus, setFocus] = useState(false);

	const { fieldName, registerField, defaultValue = '', error } = useField(name);

	useEffect(() => {
		if (inputRef.current) inputRef.current.value = defaultValue
	}, [defaultValue])
	
	useEffect(() => {
		registerField<string>({
			name: fieldName,
			ref: inputRef.current,
			getValue() {
				if (inputRef.current) return inputRef.current.value
				return ''
			},
			setValue(ref, value) {
				if (inputRef.current) {
					inputRef.current.setNativeProps({ text: value })
					inputRef.current.value = value
				}
			},
			clearValue() {
				if (inputRef.current) {
					inputRef.current.setNativeProps({ text: '' })
					inputRef.current.value = ''
				}
			},
		})
	}, [fieldName, registerField]);

	const handleChangeText = useCallback(
		(value: string) => {
			if (inputRef.current) inputRef.current.value = value
			if (onChangeText) onChangeText(value)
		},
		[onChangeText]
	)

	return (
		<ContainerInput inputWidth={inputWidth}>
			{label && <InputLabel>{label}</InputLabel>}
			<BoxInput focus={focus} error={!!error} border={border}>
					<InputStyled
						ref={inputRef}
						onChangeText={handleChangeText}
						defaultValue={defaultValue}
						{...rest}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
					/>
					{rightIcon && (
						<BoxIcon onPress={rightAction}>
							{rightIcon}
						</BoxIcon>
					)}

			</BoxInput>
			{error && <InputInfo type='error'>{error}</InputInfo>}
		</ContainerInput>
	);
};

export default Input;
