/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Onboarding: undefined;
  Sign: undefined;
  Login: undefined;
  Recovery: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

import Onboarding from "../screens/Onboard";
import Sing from "../screens/Sign";
import Login from "../screens/Login";
import Recovery from "../screens/Recovery";

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Onboarding"}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Sign" component={Sing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recovery" component={Recovery} />
    </Stack.Navigator>
  );
}
