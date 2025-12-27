import { color, fontFamily, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    base: {
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent : 'space-between',
    paddingHorizontal: spacing.lg,
  }, 
  text: {
    fontFamily: fontFamily.RobotoBold,
    color: color.gray[100],
    fontSize: 22,
    textAlign: 'left',
    padding: 5
  },
  fill: {
    backgroundColor: color.blue[500],

  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.blue[500]
  },
  textOutline: {
    color: color.blue[500],
  },
  iconFill: {
    color: color.gray[100],
  },
  iconOutline: {
    color: color.blue[500]
  }
});
