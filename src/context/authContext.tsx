import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


import { AuthContextData, AuthProviderProps } from "@/@types/types";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoreData() {
      try {
        const onboardingCompleted = await AsyncStorage.getItem(
          "@onboarding_completed"
        );
        const userToken = await AsyncStorage.getItem("@token");

        setHasCompletedOnboarding(onboardingCompleted === "false");
        setIsAuthenticated(!!userToken);
      } catch (error) {
        console.log(error, "Erro ao carregar dados persistidos");
      } finally {
        setIsLoading(false);
      }
    }

    loadStoreData();
  }, []);

  async function signIn() {
    // await new Promise(resolve => setTimeout(resolve, 800))

    // const fakeToken = "token_fake"

    await AsyncStorage.setItem("@token", "mock-token");

    setIsAuthenticated(true);
  }

  async function handleRegister() {
    await AsyncStorage.setItem('@token', 'mock-token')
    setIsAuthenticated(true)
  }

  async function signOut() {
    await AsyncStorage.removeItem("@token");
    setIsAuthenticated(false);
  }

  async function completeOnboarding() {
    await AsyncStorage.setItem("@onboarding_completed", "true");
    setHasCompletedOnboarding(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        hasCompletedOnboarding,
        isLoading,
        signIn,
        handleRegister,
        signOut,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
