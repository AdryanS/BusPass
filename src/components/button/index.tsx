import React from "react";

import type { TouchableOpacityProps } from "react-native";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { IconVariantsLoading } from "../icons/IconVariantsLoading";
import { MotiView } from "moti";

import { ButtonComponent, TextComponent } from "./styles";
import { StyleProps } from "react-native-reanimated";

interface IButtonProps extends TouchableOpacityProps {
  text?: string;
  color?: string;
  style?: StyleProps;
  icon?: SVGAElement | any;
  loading?: boolean;
  background_color?: "primary_pure" | "primary_100" | "primary_200" | "primary_300" | "primary_400" | "secundary_pure" | "secundary_100" | "secundary_200" | "secundary_300" | "positive_pure" | "positive_100" | "negative_pure" | "negative_100";
}

export const Button = ({
  text,
  icon,
  loading,
  color,
  background_color,
  style,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonComponent color={background_color} {...rest} style={style} >
      <View
         style={{
           alignContent: "center",
           justifyContent: "center",
           flexDirection: "row",
         }}
       > 
        <TextComponent color={color}> 
          {loading == true ? (
             <MotiView
               from={{
                 rotate: "0deg",
               }}
               animate={{
                 rotate: "360deg",
               }}
               transition={{
                 type: "timing",
                 duration: 1000,
                 loop: true,
               }}
             >
               <IconVariantsLoading stroke={"#fff"} />
             </MotiView>
           ) : (
             text
           )} 
         </TextComponent> 
           {icon !== undefined ? (
            <View style={{ marginLeft: 8 }}>{icon}</View>
          ) : null}
       </View>
    </ButtonComponent>
  );
};
