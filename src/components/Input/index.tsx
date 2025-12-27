import { InputProps } from "@/@types/types";
import { color } from "@/theme";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

export function Input<TFieldValues extends FieldValues>({
  icon,
  inputProps,
  formProps,
  error = "",
}: InputProps<TFieldValues>) {
  const [isFocused, setIsFocused] = useState(false);
  const { field, fieldState } = useController(formProps);
  const hasError = !!error || !!fieldState.error;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.focused,
          hasError && styles.error,
        ]}
      >
        <Feather
          name={icon}
          size={20}
          color={
            hasError
              ? color.danger.red
              : isFocused
              ? color.blue[500]
              : color.gray[500]
          }
        />

        <TextInput
          style={styles.input}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={() => {
            field.onBlur(), setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          placeholderTextColor={color.gray[400]}
          {...inputProps}
        />
      </View>
      {hasError && (
        <Text style={styles.erroText}>
          {error || fieldState.error?.message}
        </Text>
      )}
    </View>
  );
}
