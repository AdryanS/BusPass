import React from "react";

import type { TouchableOpacityProps } from "react-native";
import { View, Text } from "react-native";

import { styles } from "../../styles/styles";
import { ButtonComponent } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  text?: string;
  color?: string;
  icon?: SVGAElement | any;
}

export const Button = ({ text, icon, color, ...rest }: IButtonProps) => {
  return (
    <ButtonComponent {...rest}>
      <View
        style={{
          ...styles.fonts.title_small,
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: color ? color : "#fff", marginHorizontal: 8 }}>
          {text}
        </Text>
        {icon !== undefined ? icon : <></>}
      </View>
    </ButtonComponent>
  );
};
