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

import { Container, InputComponent } from "./styled";

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
          <Text
            style={{
              color: styles.colors.primary_pure,
              marginBottom: 4,
              fontFamily: "Montserrat-600",
              fontSize: 14,
              fontStyle: "normal",
            }}
          >
            {label}
          </Text>
          <InputComponent {...rest} ref={inputRef} />
          {error == true ? (
            <Text
              style={{
                color: "red",
                marginVertical: 4,
                fontFamily: styles.fonts.heading_100["font-family"],
                fontSize: 10,
                fontWeight: "400",
              }}
            >
              {errorMessage}
            </Text>
          ) : (
            <View style={{ marginBottom: 16 }}></View>
          )}
        </Container>
      </>
    );
  }
);
