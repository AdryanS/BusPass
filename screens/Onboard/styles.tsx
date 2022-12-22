import styled from "styled-components/native";
import { styles } from "../../src/styles/styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface IPoiter {
  active?: boolean;
}

export const Container = styled.View`
  width: ${width + "px"};
  padding: 0 ${styles.spacing.spacing_016};
  align-items: center;
`;

export const Poiter = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  border: ${(props: IPoiter) =>
    props.active == true ? "none" : "1px solid " + styles.colors.primary_300};
  background-color: ${(props: IPoiter) =>
    props.active == true
      ? styles.colors.primary_pure
      : styles.colors.primary_400};
  margin: 0 4px;
  transition: all ease-in-out 10s;
`;
