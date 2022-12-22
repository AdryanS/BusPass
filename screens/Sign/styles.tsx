import styled from "styled-components/native";
import { styles } from "../../src/styles/styles";

export const Container = styled.View`
  background-color: ${styles.colors.primary_pure};
  width: 100%;
  height: 243px;
  padding: 16px;
  justify-content: flex-end;
`;

export const FormContainer = styled.ScrollView`
  background-color: ${styles.colors.secundary_100};
  width: 100%;
  height: 100%;
  padding: 32px 16px 0 16px;
`;
