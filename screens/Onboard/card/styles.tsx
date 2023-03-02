import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Display from "../../../src/utils/constants/Layout";

const { window, isSmallDevice } = Display;

export const Container = styled.View`
  width: ${window.width + "px"};
  height: ${window.height + "px"};
  box-sizing: border-box;
  padding: 0px 16px;
  align-items: center;
  justify-content: flex-start;
`;

export const CardImage = styled.Image`
  width: ${isSmallDevice ? window.width / 1.75 + "px" : 280 + "px"};
  height: ${isSmallDevice ? window.width / 1.75 + "px" : 280 + "px"};
  margin-top: ${isSmallDevice ? RFPercentage(6) + "px" : "64px"};
  filter: ${({ theme }) =>
    theme.mode == "dark" ? "brightness(0.5)" : "brightness(1)"};
`;

export const CardTitle = styled.Text`
  width: 100%;
  margin-top: 40px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.title_medium["font-family"]};
  font-size: ${(props) => RFValue(props.theme.fonts.title_medium["font-size"]) + "px"};
  color: ${(props) => props.theme.colors.primary_pure};
`;

export const CardDescription = styled.Text`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  color: ${(props) => props.theme.colors.primary_pure};
  font-family: ${(props) => props.theme.fonts.heading_100["font-family"]};
  font-size: ${(props) => RFValue(props.theme.fonts.heading_100["font-size"]) + "px"};
`;
