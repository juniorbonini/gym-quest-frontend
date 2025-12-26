import React, { ReactNode } from "react";

export type AppFlow = "ONBOARDING" | "AUTH" | "APP";

export type AuthContextData = {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
};

export type AuthProviderProps = {
    children: ReactNode;
}


export type AppStackParamList = {
    Home: undefined;
    Profile: undefined;
    Workout: { workout: string };
}

export type OnboardingIndicatorProps = {
  total: number;
  currentIndex: number;
}