import React from "react";
import { Image } from "react-native";

import { Container, CardTitle,CardDescription, CardImage } from './styles';

// interface props of the component CardOnboarding:
interface IPropsCard {
    image?: any | undefined;
    title?: string;
    subtitle?: string;
  }
  

// Components CardOnboarding:
export const CardOnboarding = ({ title, image, subtitle }: IPropsCard) => {
  return (
    <Container>
      <CardImage
        source={image} />
      <CardTitle>
        {title}
      </CardTitle>
      <CardDescription>
        {subtitle}
      </CardDescription>
    </Container>
  );
};