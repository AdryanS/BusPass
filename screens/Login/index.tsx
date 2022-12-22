import React, { useContext } from "react";
import { styles } from "../../src/styles/styles";

import { Text, Button, Input } from "../../src/components";
import { Container } from "./styles";
import { ScrollView, Dimensions, View } from "react-native";

import { ValidatorContext } from "../../src/utils/Contexts/ValidatorContext";

import { Props } from "../../navigation";

const Login = ({ navigation }: Props) => {
  const {
    email,
    setEmail,
    inputEmailRef,
    emailValidator,
    passwordValidator,
    errorEmail,
    errorPassword,
    inputPasswordRef,
    setPassword,
    password,
  } = useContext(ValidatorContext);

  return (
    <>
      <Container>
        <Text
          formater={styles.fonts.title_large}
          style={{ color: styles.colors.secundary_pure, marginBottom: 8 }}
        >
          Login
        </Text>
        <Text
          formater={styles.fonts.heading_100}
          style={{
            color: styles.colors.secundary_pure,
            marginBottom: 32,
          }}
        >
          Para começar a sua experiência, faça login em sua conta.
        </Text>
      </Container>
      <ScrollView
        style={{
          backgroundColor: styles.colors.secundary_100,
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
          paddingTop: 32,
          paddingHorizontal: 16,
        }}
      >
        <Input
          label="E-mail"
          errorMessage={errorEmail}
          autoCapitalize="none"
          placeholder="Digite aqui seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={styles.colors.primary_300}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          onEndEditing={() => {
            emailValidator(false);
          }}
          ref={inputEmailRef}
        />

        <Input
          label="Senha"
          errorMessage={errorPassword}
          placeholder="Digite aqui uma senha de acesso"
          keyboardType="default"
          placeholderTextColor={styles.colors.primary_300}
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          onEndEditing={() => {
            passwordValidator(false);
          }}
          ref={inputPasswordRef}
        />
        <Text
          formater={styles.fonts.title_small}
          style={{
            alignSelf: "flex-end",
            marginBottom: 16,
          }}
          onPress={() => {
            navigation.navigate("Recovery");
          }}
        >
          Esqueci minha senha
        </Text>

        <View
          style={{
            width: Dimensions.get("screen").width - 32,
            marginTop: 16,
            alignItems: "center",
            paddingBottom:
              Dimensions.get("screen").height -
              Dimensions.get("window").height -
              16 +
              32,
          }}
        >
          <Button
            style={{
              width: Dimensions.get("screen").width - 32,
              height: 49,
              backgroundColor: styles.colors.primary_pure,
            }}
            text={"Entrar"}
            onPress={() => {
              emailValidator(true);
              passwordValidator(true);
            }}
          />
          <View style={{ marginTop: 16 }}>
            <Text formater={styles.fonts.heading_100}>
              Não possui uma conta?
              <Text
                formater={styles.fonts.title_small}
                onPress={() => {
                  navigation.navigate("Sign");
                }}
              >
                {" "}
                Crie aqui o seu acesso!
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
