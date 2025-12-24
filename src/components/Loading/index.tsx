import { ActivityIndicator, View } from "react-native";
import { styles } from "./style";
import { Colors } from "../../theme";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator  color={Colors.primary} />
    </View>
  );
}
