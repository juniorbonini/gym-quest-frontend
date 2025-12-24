import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { useAuth } from "../context/authContext";

const Stack = createNativeStackNavigator();

function OnboardingScreen() {
  const { completeOnboarding } = useAuth()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Onboarding Screen</Text>
      <Button title="Continuar" onPress={completeOnboarding} />
    </View>
  );
}

export function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingMain" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
