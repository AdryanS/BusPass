import styled, {DefaultTheme} from "styled-components/native";
import { styles } from "../../src/styles/styles";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface IPoiter {
  active?: boolean;
  theme: DefaultTheme
}

export const PointerContainer = styled.View`
  align-content: center;
  justify-content: center;
  flex-direction: row;
  top: ${height - 189 - 6 + "px"};
  position: absolute;
  width: ${width + "px"};
`;

export const Poiter = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  border: ${(props: IPoiter) =>  props.active == true ? "none" : "1px solid " + props.theme.colors.primary_300};
  background-color: ${(props: IPoiter) => props.active == true ? props.theme.colors.primary_pure : styles.colors.primary_400};
  margin: 0 4px;
  transition: all ease-in-out 10s;
`;

export const ButtonContainer = styled.View`
  top: ${height - 76 - 20.5 + "px"};
  right: 32px;
  position: absolute;
`;
