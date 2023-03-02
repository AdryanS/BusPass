import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";

// import components:
import { IconVariantsRight } from "../../src/components/icons";
import { Button } from "../../src/components";

import { Poiter, PointerContainer, ButtonContainer } from "./styles";

// import types:
import { Props } from "../../navigation";

// width and height:
const { width, height } = Dimensions.get("window");

// Data of Onboarding:
import DATA from '../../src/assets/onboard/data';

import { CardOnboarding } from './card'

// Element OnBoarding:
const Onboarding = ({ navigation }: Props) => {
  const [offSet, setOffSet] = useState(1);
  const [offSetNum, setOffSeNum] = useState(0);

  return (
    <View>
      <FlatList
        style={{ height: height }}
        data={DATA}
        horizontal
        pagingEnabled
        contentOffset={{ x: offSetNum, y: 0 }}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.x <= 0) {
            setOffSeNum(e.nativeEvent.contentOffset.x);
            setOffSet(1);
          } else {
            setOffSet(2);
          }
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardOnboarding
            title={item.title}
            image={item.image}
            subtitle={item.subtitle}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <PointerContainer>
        <Poiter active={offSet == 1 ? true : false} />
        <Poiter active={offSet == 2 ? true : false} />
      </PointerContainer>
      <ButtonContainer>
        {offSet == 1 ? (
          <>
            <Button
              background_color={"primary_pure"}
              text="Próximo"
              color={"#fff"}
              onPress={() => {
                setOffSeNum(width);
              }}
              icon={<IconVariantsRight stroke={"#fff"} />}
            />
          </>
        ) : (
          <>
           <Button
              background_color={"primary_pure"}
              text="Crie uma conta"
              color={"#fff"}
              onPress={() => {
                navigation.navigate("Sign");
              }}
              icon={<IconVariantsRight stroke={"#fff"} />}
            /> 
          </>
        )}
      </ButtonContainer>
    </View>
  );
};

export default Onboarding;
