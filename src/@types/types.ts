export type AppFlow = "ONBOARDING" | "AUTH" | "APP";

export type AuthState = {
  isAuthenticated: boolean;
  hasSeenOnboarding: boolean;
  token: string | null;
};

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  Workout: { workout: string };
};
