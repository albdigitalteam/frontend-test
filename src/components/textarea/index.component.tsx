import React, {useCallback, useRef, useState} from 'react';

import {ITextarea} from './textarea.interface';

import {Container} from './styles.style';

const Textarea: React.FC<ITextarea> = ({...rest}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textareaRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => [setIsFocused(true)], []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={textareaRef}
        {...rest}
      >

      </textarea>
    </Container>
  );
};

export default Textarea;
