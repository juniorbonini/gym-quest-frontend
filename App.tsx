import { useFonts } from "expo-font";


import { Loading } from "./src/components/Loading";
import { AuthProvider } from "./src/context/authContext";
import RootNavigation from "@/navigation/rootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./src/assets/fonts/Inter/Inter_24pt-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto_Condensed-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto_Condensed-Bold.ttf"),
  });

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  )
}
