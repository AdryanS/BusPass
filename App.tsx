import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

import { ValidatorProvider } from "./src/utils/Contexts/ValidatorContext";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ValidatorProvider>
          <StatusBar style="auto" />
          <Navigation />
        </ValidatorProvider>
      </SafeAreaProvider>
    );
  }
}
