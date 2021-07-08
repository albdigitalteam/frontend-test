import React, {
  useRef,
  useEffect,
  ReactElement,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import * as S from './styles';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

type SelectProps = {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: any;
};

const Select: React.FC<SelectProps> = ({
  icon: Icon,
  containerStyle,
  name,
  children,
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const optionRefs = useRef<HTMLOptionElement[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isFielld, setIsFielld] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFielld(!!optionRefs.current.values);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: optionRefs.current,
      getValue: (refs: HTMLOptionElement[]) => {
        return refs.find((ref) => ref.selected)?.value || '';
      },
      setValue: (refs: HTMLOptionElement[], value: string) => {
        const option = refs.find((ref) => ref.value === value);

        if (option) option.selected = true;
      },
      clearValue: (refs: HTMLOptionElement[]) => {
        refs.forEach((ref) => (ref.selected = false));
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container
      style={containerStyle}
      isErrored={!!error}
      isFielld={isFielld}
      isFocused={isFocused}
      data-testid="select-container"
    >
      {Icon && <Icon size={20} />}
      <S.Select name={fieldName} defaultValue={defaultValue} {...rest}>
        {/* <S.SelectItem key={0} value={0}>
          {selectedDefault}
        </S.SelectItem> */}

        {React.Children.map(children, (child) =>
          React.cloneElement(child as ReactElement, {
            ref: (ref: HTMLOptionElement) => optionRefs.current.push(ref),
          }),
        )}
      </S.Select>
      {error && (
        <S.Error title={error}>
          <FiAlertCircle color="#c53030" size="20" />
        </S.Error>
      )}
    </S.Container>
  );
};

export default Select;
