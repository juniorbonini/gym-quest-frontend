import { OboardingScreen } from "@/screens/Onboarding/onboarding-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingOne" component={OboardingScreen} />
    </Stack.Navigator>
  );
}
