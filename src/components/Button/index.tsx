import { ButtonProps } from "@/@types/types";
import { useAuth } from "@/context/authContext";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import { color } from "@/theme";

export function Button({
  title,
  onPress,
  icon,
  mode = "FILL",
  ...rest
}: ButtonProps) {
  const containerStyle = [
    styles.base,
    mode === "FILL" && styles.fill,
    mode === "OUTLINE" && styles.outline,
  ];
  const textStyle = [styles.text, mode === "OUTLINE" && styles.textOutline];

  const iconStyle = [
    mode === "FILL" && styles.iconFill,
    mode === "OUTLINE" && styles.iconOutline,
  ];
  const { hasCompletedOnboarding } = useAuth();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyle}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={textStyle}>{title}</Text>
      {hasCompletedOnboarding && (
        <Feather name="arrow-right" size={26} style={iconStyle} />
      )}
    </TouchableOpacity>
  );
}
