import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";
interface ButtonProps {
  theme?: DefaultTheme;
  color?:
    | "primary_pure"
    | "primary_100"
    | "primary_200"
    | "primary_300"
    | "primary_400"
    | "secundary_pure"
    | "secundary_100"
    | "secundary_200"
    | "secundary_300"
    | "positive_pure"
    | "positive_100"
    | "negative_pure"
    | "negative_100";
}
interface TextProps {
  theme?: DefaultTheme;
  color?: string;
}

export const ButtonComponent = styled.TouchableOpacity<ButtonProps>`
  padding: 8px;
  padding-left: 24px ;
  padding-right: 24px ;
  height: 40px;
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors["primary_pure"]};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-direction: row;
`;

export const TextComponent = styled.Text<TextProps>`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-family: ${(props) => props.theme.fonts.title_small["font-family"]};
  font-size: ${(props) =>
    RFValue(props.theme.fonts.title_small["font-size"]) + "px"};
`;
