import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";
import { useAuth } from "@/context/authContext";
import { OnboardingStack } from "./onboardingStack";

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
