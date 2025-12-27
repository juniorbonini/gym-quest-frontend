import { Feather } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { FieldValue, FieldValues, UseControllerProps } from "react-hook-form";
import { TextInputProps, TouchableOpacityProps } from "react-native";

export type AppFlow = "ONBOARDING" | "AUTH" | "APP";
type ButtonMode = 'FILL' | 'OUTLINE';

export type AuthContextData = {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  isLoading: boolean;
  signIn: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  signOut: () => Promise<void>;
  completeOnboarding: () => Promise<void>;
};

export type FormLoginParams = {
  email: string;
  password: string;
}

export type FormRegisterParams = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  date: Date;
  gender: string;
  age:  number;
  local: string;
}

export type AuthProviderProps = {
  children: ReactNode;
};

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  Workout: { workout: string };
};

export type OnboardingIndicatorProps = {
  total: number;
  currentIndex: number;
};

export type OnboardingDataProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: any;
};

export type ButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof Feather.glyphMap;
  title: string;
  onPress: () => void;
  mode?: ButtonMode;
};

export type InputProps<TFieldValues extends FieldValues = FieldValues> = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps<TFieldValues>;
  inputProps: TextInputProps;
  error?: string;
};
