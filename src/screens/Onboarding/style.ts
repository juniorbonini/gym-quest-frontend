import { StyleSheet } from "react-native";
import { color, fontFamily, spacing } from "@/theme";

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.lg,
    gap: 10,
  },
  title: {
    fontFamily: fontFamily.RobotoBold,
    fontSize: 50,
    color: color.gray[100],
    textAlign: "center",
    marginBottom: "150%",
    paddingTop: 30,
  },
  subtitle: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 40,
    color: color.gray[300],
    textAlign: "center",
  },
  description: {
    fontFamily: fontFamily.InterRegular,
    fontSize: 22,
    color: color.gray[500],
    textAlign: "center",
  },
  button: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 14,
    backgroundColor: color.blue[500],
  },
});
