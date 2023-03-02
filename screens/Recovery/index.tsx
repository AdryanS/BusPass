import React, { useContext, useState } from "react";
import { styles } from "../../src/styles/styles";

import { Text, Button, Input } from "../../src/components";
import { Container, FormContainer, TextTitle, TextDescription, ButtonContainer, TextDescriptionLogin, TextDescriptionLoginLink } from "./styles";
import { View, Dimensions } from "react-native";

import { Props } from "../../navigation";

import { ValidatorContext } from "../../src/utils/Contexts/ValidatorContext";

const Recovery = ({ navigation }: Props) => {
  const { email, emailValidator, errorEmail, setEmail, inputEmailRef } =
    useContext(ValidatorContext);

    async function validateUser() {
    if (errorEmail !== "success") {
      emailValidator(true)
    } else {
      await handleSignUser(email);
    }
  }

  async function handleSignUser(email:string) {

    const user = {
      email,
    };

    setLoading(true);
    
    setTimeout(() => {
      setGoToLogin(true)
    }, 1000);
  }

  const [goToLogin, setGoToLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container>
        <TextTitle>
          Recuperação de Senha
        </TextTitle>
        <TextDescription>
          Para recuperar sua senha, insira o seu e-mail de acesso.
        </TextDescription>
      </Container>
      <FormContainer>
        <Input
          label="E-mail"
          errorMessage={errorEmail}
          placeholder="Digite aqui seu e-mail"
          autoCapitalize="none"
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

        <ButtonContainer>
          {goToLogin == false ? (
            <>
              <Button
                style={{
                  width: Dimensions.get("screen").width - 32,
                }}
                background_color="primary_pure"
                loading={loading}
                text={"Recuperar senha"}
                onPress={() => {
                  validateUser()
                }}
              />
            </>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <TextDescriptionLogin
                style={{ textAlign: "center", marginBottom: 24 }}
              >
                Encaminhamos um link de redefinição de senha ao seu e-mail.
              </TextDescriptionLogin>
              <TextDescriptionLogin
                style={{ textAlign: "center" }}
              >
                Se já efetuou a redefinição,{" "}
                <TextDescriptionLoginLink
                  onPress={() => navigation.navigate("Login")}
                >
                  clique aqui para efetuar o login!
                </TextDescriptionLoginLink>
              </TextDescriptionLogin>
            </View>
          )}
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default Recovery;
