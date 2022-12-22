import styled from "styled-components/native";
import { styles } from "../../styles/styles";

export const Container = styled.View`
  width: 100%;
`;

export const InputComponent = styled.TextInput`
  ${styles.fonts.heading_100}
  width: 100%;
  padding: 16px;
  background-color: ${styles.colors.primary_400};
  color: ${styles.colors.primary_pure};
  border-radius: 8px;
`;
