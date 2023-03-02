import React, { useContext, useState } from "react";
import { theme } from "../../src/styles/theme";

import { Button, Input } from "../../src/components";
import { Container, FormContainer, TextTitle, TextDescription, ButtonContainer, TextDescriptionLogin, TextDescriptionLoginLink } from "./styles";
import { View } from "react-native";

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

  const [loading, setLoading] = useState(false);

  async function validateUser() {

    if (errorName !== "success") {
      nameValidator(true)
    } else if (errorCpf !== "success") {
      cpfValidator(true)
    } else if (errorEmail !== "success") {
      emailValidator(true)
    } else if (errorPassword !== "success") {
      passwordValidator(true)
    } else {
      await handleSignUser(name, cpf, email, password);
    }
  }

  async function handleSignUser(name:string, cpf:string, email:string, password:string) {

    const user = {
      name,
      cpf,
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
        <TextTitle>
          Cadastro
        </TextTitle>
        <TextDescription>
          Para começar a sua experiência, crie uma conta.
        </TextDescription>
      </Container>
      <FormContainer>
        <Input
          label="Nome Completo"
          autoCapitalize="words"
          errorMessage={errorName}
          placeholder="Digite aqui seu nome completo"
          keyboardType="default"
          placeholderTextColor={theme.colors.primary_300}
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
          placeholderTextColor={theme.colors.primary_300}
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
          label="Crie uma senha"
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

        <ButtonContainer>
          <Button
            style={{ width: "100%" }}
            background_color="primary_pure"
            loading={loading}
            text={"Crie sua conta"}
            onPress={() => {
              validateUser()
            }}
          />
          <View style={{ marginTop: 24, marginBottom: 64 }}>
            <TextDescriptionLogin>
              Já possui uma conta?
              <TextDescriptionLoginLink
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                {" "}
                Faça seu login!
              </TextDescriptionLoginLink>
            </TextDescriptionLogin>
          </View>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default Sign;
