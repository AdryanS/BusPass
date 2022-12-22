import { Button } from "../components/button";
import { Input } from "../components/Input";

import styled from "styled-components/native";
import { styles } from "../styles/styles";

interface ItextStyledProps {
  formater?: object | any;
}

const Image = styled.Image``;

const Text = styled.Text`
  ${({ formater }: ItextStyledProps) => formater}
  color: ${styles.colors.primary_pure};
`;

export { Text, Image, Button, Input };
