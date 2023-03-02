import React, {
  forwardRef,
  useImperativeHandle,
  createRef,
  useState,
} from "react";
import { TextInputProps, View, Text } from "react-native";
import { styles } from "../../styles/styles";

interface IInputComponentProps extends TextInputProps {
  label: string;
  errorMessage: string;
}

import { Container, InputComponent, LabelComponent, ErrorComponent } from "./styled";

export const Input = forwardRef(
  ({ label, errorMessage, ...rest }: IInputComponentProps, ref: any) => {
    const [error, setError] = useState<boolean | null>(null);

    const inputRef = createRef<any>();
    useImperativeHandle(ref, () => ({
      focusOnError(state: boolean, focus: boolean) {
        setError(state);
        if (focus === true) {
          inputRef.current.focus();
        }
      },
    }));

    return (
      <>
        <Container>
          <LabelComponent>
            {label}
          </LabelComponent>
          <InputComponent {...rest} ref={inputRef} />
          {error && (
            <ErrorComponent>
              {errorMessage}
            </ErrorComponent>
          )}
        </Container>
      </>
    );
  }
);