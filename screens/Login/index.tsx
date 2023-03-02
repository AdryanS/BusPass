import React, { useContext, useState } from "react";

import { Button, Input } from "../../src/components";
import { theme } from "../../src/styles/theme";
import {
  Container,
  FormContainer,
  ButtonContainer,
  TextDescription,
  TextDescriptionLogin,
  TextDescriptionLoginLink,
  TextTitle,
} from "./styles";
import { View } from "react-native";

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

  const [loading, setLoading] = useState(false);

  async function validateUser() {

    if (errorEmail !== "success") {
      emailValidator(true)
    } else if (errorPassword !== "success") {
      passwordValidator(true)
    } else {
      await handleSignUser(email, password);
    }
  }

  async function handleSignUser(email:string, password:string) {

    const user = {
      email,
      password,
    };

    setLoading(true);
    
    setTimeout(() => {
      navigation.navigate("Home")
    }, 1000);
  }

  return (
    <>
      <Container>
        <TextTitle>Login</TextTitle>
        <TextDescription>
          Para começar a sua experiência, faça login em sua conta.
        </TextDescription>
      </Container>
      <FormContainer>
        <Input
          label="E-mail"
          errorMessage={errorEmail}
          autoCapitalize="none"
          placeholder="Digite aqui seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={theme.colors.primary_300}
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
          placeholderTextColor={theme.colors.primary_300}
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
        <TextDescriptionLoginLink
          style={{
            alignSelf: "flex-end",
            marginBottom: 16,
          }}
          onPress={() => {
            navigation.navigate("Recovery");
          }}
        >
          Esqueci minha senha
        </TextDescriptionLoginLink>

        <ButtonContainer>
          <Button
            style={{ width: "100%" }}
            background_color="primary_pure"
            text={"Entrar"}
            loading={loading}
            onPress={() => {
              validateUser()
            }}
          />
          <View style={{ marginTop: 24, marginBottom: 64 }}>
            <TextDescriptionLogin>
              Não possui uma conta?
              <TextDescriptionLoginLink
                onPress={() => {
                  navigation.navigate("Sign");
                }}
              >
                {" "}
                Crie aqui o seu acesso!
              </TextDescriptionLoginLink>
            </TextDescriptionLogin>
          </View>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default Login;
