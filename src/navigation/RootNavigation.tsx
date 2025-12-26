import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";
import { useAuth } from "@/context/authContext";
import { OnboardingStack } from "./onboardingStack";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const { isAuthenticated, isLoading, hasCompletedOnboarding } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {!hasCompletedOnboarding && <OnboardingStack />}
      {hasCompletedOnboarding && !isAuthenticated && <AuthStack />}
      {hasCompletedOnboarding && isAuthenticated && <AppStack />}
    </NavigationContainer>
  );
}
