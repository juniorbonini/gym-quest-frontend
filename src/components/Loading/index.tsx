import { ActivityIndicator, View } from "react-native";

import { color } from "@/theme";
import { styles } from "./style";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator  color={color.primary} />
    </View>
  );
}
