import { StyleSheet } from "react-native";
import { color, fontFamily, spacing } from "@/theme";

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },    
  content: {
    paddingHorizontal: spacing.lg
  },
  title: {
    fontFamily: fontFamily.RobotoBold,
    fontSize: 50,
    color: color.textPrimary,
    textAlign: 'center',
    marginBottom: '150%',
    paddingTop: 30

  },
  subtitle: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 40,
    color: color.textPrimary,
    marginBottom: 15,
    textAlign: 'center'
  },
  description: {
    fontFamily: fontFamily.InterRegular,
    fontSize: 22,
    color: color.textSecondary,
    textAlign: 'center',
    marginBottom: 35
  },
  button: {
    backgroundColor: color.strong,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    fontFamily: fontFamily.RobotoBold,
    color: color.background,
    fontSize: 22
  },
});
