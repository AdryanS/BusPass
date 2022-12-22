import React, { useContext } from "react";
import { styles } from "../../src/styles/styles";

import { Text, Button, Input } from "../../src/components";
import { Container, FormContainer } from "./styles";
import { View, Dimensions } from "react-native";

import { Props } from "../../navigation";

import { ValidatorContext } from "../../src/utils/Contexts/ValidatorContext";

const Sign = ({ navigation }: Props) => {
  const {
    errorName,
    inputNameRef,
    name,
    nameValidator,
    setName,
    cpf,
    cpfValidator,
    errorCpf,
    inputCpfRef,
    setCpf,
    email,
    emailValidator,
    errorEmail,
    inputEmailRef,
    setEmail,
    errorPassword,
    inputPasswordRef,
    password,
    passwordValidator,
    setPassword,
  } = useContext(ValidatorContext);

  return (
    <>
      <Container>
        <Text
          formater={styles.fonts.title_large}
          style={{ color: styles.colors.secundary_pure, marginBottom: 8 }}
        >
          Cadastro
        </Text>
        <Text
          formater={styles.fonts.heading_100}
          style={{
            color: styles.colors.secundary_pure,
            marginBottom: 32,
          }}
        >
          Para começar a sua experiência, crie uma conta.
        </Text>
      </Container>
      <FormContainer>
        <Input
          label="Nome Completo"
          autoCapitalize="words"
          errorMessage={errorName}
          placeholder="Digite aqui seu nome completo"
          keyboardType="default"
          placeholderTextColor={styles.colors.primary_300}
          value={name}
          onChangeText={(text) => setName(text)}
          onEndEditing={() => {
            nameValidator(false);
          }}
          ref={inputNameRef}
        />
        <Input
          label="CPF"
          errorMessage={errorCpf}
          placeholder="Digite aqui seu CPF"
          keyboardType="numeric"
          placeholderTextColor={styles.colors.primary_300}
          value={cpf}
          onChangeText={(text) => {
            let value = text.replace(/[^0-9]/g, "");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            setCpf(value);
          }}
          onEndEditing={() => {
            cpfValidator(false);
          }}
          ref={inputCpfRef}
        />

        <Input
          label="E-mail"
          autoCapitalize="none"
          errorMessage={errorEmail}
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
          label="Crie uma senha"
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
            text={"Crie sua conta"}
            onPress={() => {
              nameValidator(true);
              cpfValidator(true);
              emailValidator(true);
              passwordValidator(true);
            }}
          />
          <View style={{ marginTop: 16 }}>
            <Text formater={styles.fonts.heading_100}>
              Já possui uma conta?
              <Text
                formater={styles.fonts.title_small}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                {" "}
                Faça seu login!
              </Text>
            </Text>
          </View>
        </View>
      </FormContainer>
    </>
  );
};

export default Sign;
