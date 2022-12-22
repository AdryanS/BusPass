import React, { useContext, useState } from "react";
import { styles } from "../../src/styles/styles";

import { Text, Button, Input } from "../../src/components";
import { Container } from "./styles";
import { View, Dimensions } from "react-native";

import { Props } from "../../navigation";

import { ValidatorContext } from "../../src/utils/Contexts/ValidatorContext";

const Recovery = ({ navigation }: Props) => {
  const { email, emailValidator, errorEmail, setEmail, inputEmailRef } =
    useContext(ValidatorContext);

  const [goToLogin, setGoToLogin] = useState(false);

  return (
    <>
      <Container>
        <Text
          formater={styles.fonts.title_large}
          style={{ color: styles.colors.secundary_pure, marginBottom: 8 }}
        >
          Recuperação de Senha
        </Text>
        <Text
          formater={styles.fonts.heading_100}
          style={{
            color: styles.colors.secundary_pure,
            marginBottom: 32,
          }}
        >
          Para recuperar sua senha, insira o seu e-mail de acesso.
        </Text>
      </Container>
      <View
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
          {goToLogin == false ? (
            <>
              <Button
                style={{
                  width: Dimensions.get("screen").width - 32,
                  height: 49,
                  backgroundColor: styles.colors.primary_pure,
                }}
                text={"Recuperar senha"}
                onPress={() => {
                  emailValidator(true);
                  if (errorEmail == "success") {
                    setGoToLogin(true);
                  }
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
              <Text
                formater={styles.fonts.heading_100}
                style={{ textAlign: "center", marginBottom: 24 }}
              >
                Encaminhamos um link de redefinição de senha ao seu e-mail.
              </Text>
              <Text
                formater={styles.fonts.heading_100}
                style={{ textAlign: "center" }}
              >
                Se já efetuou a redefinição,{" "}
                <Text
                  formater={styles.fonts.title_small}
                  onPress={() => navigation.navigate("Login")}
                >
                  clique aqui para efetuar o login!
                </Text>
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default Recovery;
