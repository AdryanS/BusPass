import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary_pure};
  width: 100%;
  height: 243px;
  padding: 16px;
  justify-content: flex-end;
`;

export const FormContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.secundary_100};
  /* width: 100%; */
  /* height: 800px; */
  padding: 32px 16px 0px 16px;
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secundary_pure};
  font-family: ${({ theme }) => theme.fonts.title_large["font-family"]};
  font-size: ${({ theme }) =>
    RFValue(theme.fonts.title_large["font-size"]) + "px"};
  margin-bottom: 8px;
`;

export const TextDescription = styled.Text`
  color: ${({ theme }) => theme.colors.secundary_pure};
  font-family: ${({ theme }) => theme.fonts.heading_100["font-family"]};
  font-size: ${({ theme }) =>
    RFValue(theme.fonts.heading_100["font-size"]) + "px"};
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
  width: ${Dimensions.get("screen").width - 32 + "px"};
  margin-top: 16px;
  align-items: center;
  padding-bottom: ${Dimensions.get("screen").height - Dimensions.get("window").height - 16 + 32 + "px"};
`;

export const TextDescriptionLogin = styled.Text`
  color: ${({ theme }) => theme.colors.primary_pure};
  font-family: ${({ theme }) => theme.fonts.heading_100["font-family"]};
  font-size: ${({ theme }) =>
    RFValue(theme.fonts.heading_100["font-size"]) + "px"};
  margin-bottom: 32px;
`;
export const TextDescriptionLoginLink = styled.Text`
  color: ${({ theme }) => theme.colors.primary_pure};
  font-family: ${({ theme }) => theme.fonts.title_small["font-family"]};
  font-size: ${({ theme }) =>
    RFValue(theme.fonts.title_small["font-size"]) + "px"};
  margin-bottom: 32px;
`;