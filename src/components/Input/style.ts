import { color, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: color.gray[600],
    paddingVertical: spacing.sm,
  },
  input: {
    fontSize: 14,
    color: color.black["black-background"],
  },
  focused: {
    borderBottomColor: color.blue[500],
  },
  error: {
    borderBottomColor: color.danger.red,
  },
  erroText: {
    marginTop: spacing.xs,
    fontSize: 12,
    color: color.danger.red,
  },
});
