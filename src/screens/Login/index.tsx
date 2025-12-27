import { useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";

import { styles } from "./style";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useAuth } from "@/context/authContext";
import { LoginFormSchema, loginSchema } from "./login.schema";

const logoImage = require("../../assets/images/gym-quest-logo.png");

export function LoginScreen() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormSchema) {
    signIn({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Acessa sua conta</Text>
          <Text style={styles.subtitle}>
            Infome seu E-mail e senha para entrar
          </Text>
        </View>
        <Input<LoginFormSchema>
          icon="mail"
          formProps={{
            name: "email",
            control,
          }}
          inputProps={{
            placeholder: "mail@example.com",
            keyboardType: "email-address",
            autoCapitalize: "none",
          }}
          error={errors.email?.message}
        />

        <Input<LoginFormSchema>
          icon="lock"
          formProps={{
            name: "password",
            control,
          }}
          inputProps={{
            placeholder: "Sua senha",
            secureTextEntry: true,
          }}
          error={errors.password?.message}
        />

        <Button
          title="Acessar"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          icon="arrow-right"
          mode="FILL"
        />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Ainda não tem uma conta?</Text>
        <Button
          title="Cadastrar"
          icon="arrow-right"
          onPress={() => Promise<void>}
          mode="OUTLINE"
        />
      </View>
    </>
  );
}
