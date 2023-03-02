import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import 'react-native-reanimated'
import 'react-native-gesture-handler'


import useCachedResources from "./src/utils/hooks/useCachedResources";
import Navigation from "./navigation";

import { ValidatorProvider } from "./src/utils/Contexts/ValidatorContext";
import { MyThemeProvider } from './src/styles/MyThemeProvider';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ValidatorProvider>
          <MyThemeProvider>
            <StatusBar style="auto" />
            <Navigation />
          </MyThemeProvider>
        </ValidatorProvider>
      </SafeAreaProvider>
    );
  }
}