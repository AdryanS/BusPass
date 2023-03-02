import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const LabelComponent = styled.Text`
  ${({ theme }: any) => theme.fonts.title_small}
  color: ${({ theme }: any) => theme.colors.primary_pure};
  margin-bottom: 4px;
`;

export const ErrorComponent = styled.Text`
  font-family: ${({ theme }: any) => theme.fonts.heading_100["font-family"]};
  font-size: 10px;
  color: ${({ theme }: any) => theme.colors.negative_pure};
  margin-top: 4px;
`;

export const InputComponent = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  background-color: ${({ theme }: any) => theme.colors.primary_400};
  border-radius: 8px;

  color: ${({ theme }: any) => theme.colors.primary_pure};
  font-size: 12px;
  font-family: ${({ theme }: any) => theme.fonts.heading_100["font-family"]};
`;