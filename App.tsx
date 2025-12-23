import { useFonts } from "expo-font";
import { Colors } from "./src/theme";
import { View, ActivityIndicator } from "react-native";

export default function App() {
  const fontsLoaded = useFonts({
    "Inter-Regular": require("./src/assets/fonts/Inter/Inter_24pt-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto_Condensed-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto_Condensed-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.background,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }
  return null;
}
