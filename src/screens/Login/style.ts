import { color, fontFamily, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    backgroundColor: color.gray[100],
    gap: spacing.md,
    marginTop: 250,
  },
  title: {
    fontFamily: fontFamily.RobotoBold,
    fontSize: 30,
    color: color.black["black-background"],
  },
  subtitle: {
    fontFamily: fontFamily.InterRegular,
    fontSize: 14,
    color: color.gray[600],
    marginBottom: 2,
  },
  headerContainer: {
    alignItems: "center",
    gap: 5,
  },
  footerContainer: {
    gap: spacing.sm,
    marginBottom: 50,
    paddingHorizontal: spacing.md,
  },
  footerText: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 16,
    color: color.gray[500],
  },
});
