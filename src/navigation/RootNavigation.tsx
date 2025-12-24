import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/authContext";
import { AppStack } from "./AppStack";
import { OnboardingStack } from "./OnboardingStack";
import { AuthStack } from "./AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const { isAuthenticated, isLoading, hasCompletedOnboarding } = useAuth();

  if (isLoading) {
    return null;
  }

   console.log(hasCompletedOnboarding)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!hasCompletedOnboarding  && (
          <Stack.Screen name="Onboarding" component={OnboardingStack} />
        )}

        {hasCompletedOnboarding && !isAuthenticated && (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}

        {hasCompletedOnboarding && isAuthenticated && (
          <Stack.Screen name="App" component={AppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
