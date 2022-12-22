import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";

// import components:
import { IconVariantsRight } from "../../src/components/icons";
import { Button, Image, Text } from "../../src/components";

import { styles } from "../../src/styles/styles";
import { Container, Poiter } from "./styles";

// import types:
import { Props } from "../../navigation";

// interface props of the component CardOnboarding:
interface IPropsCard {
  image?: any | undefined;
  title?: string;
  subtitle?: string;
}

// width and height:
const { width, height } = Dimensions.get("window");

// Data for:
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    image: require(`../../src/assets/onboard/primary_image.png`),
    title: "Pague suas passagens através do seu celular",
    subtitle:
      "Com o BusPass, basta selecionar a opção de pagar passagem, aproximar o celular na catraca e curtir a sua viagem",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    image: require(`../../src/assets/onboard/secundary_image.png`),
    title: "Efetue recargas e confira seus gastos de transporte",
    subtitle:
      "Por aqui, você pode colocar saldo através do seu cartão de débito, crédito ou pix, além de conferir todos os gastos.",
  },
];

// Components CardOnboarding:
const CardOnboarding = ({ title, image, subtitle }: IPropsCard) => {
  return (
    <Container>
      <Image
        source={image}
        style={{
          width: 280,
          height: 280,
          marginTop: 64,
          marginBottom: 40,
        }}
      />
      <Text
        formater={styles.fonts.title_medium}
        style={{
          textAlign: "center",
          width: width - 32,
          marginBottom: 16,
        }}
      >
        {title}
      </Text>
      <Text
        formater={styles.fonts.heading_100}
        style={{
          width: width - 32,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        {subtitle}
      </Text>
    </Container>
  );
};

// Element OnBoarding:
const Onboarding = ({ navigation }: Props) => {
  const [offSet, setOffSet] = useState(1);
  const [offSetNum, setOffSeNum] = useState(0);

  return (
    <Container>
      <FlatList
        style={{ width: width, height: height }}
        data={DATA}
        horizontal
        pagingEnabled
        decelerationRate="fast"
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
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          top: height - 189 - 6,
          position: "absolute",
        }}
      >
        <Poiter active={offSet == 1 ? true : false} />
        <Poiter active={offSet == 2 ? true : false} />
      </View>
      <View
        style={{
          top: height - 76 - 20.5,
          right: 32,
          position: "absolute",
        }}
      >
        {offSet == 1 ? (
          <>
            <Button
              style={{
                width: 134,
                height: 41,
                backgroundColor: styles.colors.primary_pure,
              }}
              text="Proximo"
              onPress={() => {
                setOffSeNum(width);
              }}
              icon={<IconVariantsRight stroke={"#fff"} />}
            />
          </>
        ) : (
          <>
            <Button
              style={{
                width: 184,
                height: 41,
                backgroundColor: styles.colors.primary_pure,
              }}
              text="Crie uma conta"
              onPress={() => {
                navigation.navigate("Sign");
              }}
              icon={<IconVariantsRight stroke={"#fff"} />}
            />
          </>
        )}
      </View>
    </Container>
  );
};

export default Onboarding;
