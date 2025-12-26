import { StyleSheet } from "react-native";
import { Colors, FontFamily, Spacing } from "../../theme";

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },    
  content: {
    paddingHorizontal: Spacing.lg
  },
  title: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: 50,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: '150%',
    paddingTop: 30

  },
  subtitle: {
    fontFamily: FontFamily.RobotoMedium,
    fontSize: 40,
    color: Colors.textPrimary,
    marginBottom: 15,
    textAlign: 'center'
  },
  description: {
    fontFamily: FontFamily.InterRegular,
    fontSize: 22,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 35
  },
  button: {
    backgroundColor: Colors.strong,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    fontFamily: FontFamily.RobotoBold,
    color: Colors.background,
    fontSize: 22
  },
});
