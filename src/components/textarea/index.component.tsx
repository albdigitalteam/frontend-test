import React, {useCallback, useRef, useState} from 'react';
import {FiAlertCircle} from 'react-icons/fi';

import {ITextarea} from './textarea.interface';

import {Container, Error} from './styles.style';

const Textarea: React.FC<ITextarea> = ({error, ...rest}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textareaRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => [setIsFocused(true)], []);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={textareaRef}
        {...rest}
      ></textarea>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Textarea;
