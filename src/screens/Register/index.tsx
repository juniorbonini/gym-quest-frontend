import { useAuth } from "@/context/authContext";
import { useForm } from "react-hook-form";
import { RegisterFormSchema, registerSchema } from "./register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { View } from "react-native";

export function RegisterScreen() {
  const { handleRegister } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  function onRegister(data: RegisterFormSchema) {
    handleRegister({
      email: data.email,
      name: data.name,
      password: data.password,
      confirmPassword: data.confirmPassoword,
      date: data.date,
      age: data.age,
      gender: data.gender,
      local: data.local,
    });
  }

  return (
    <View>
        
    </View>
  )
}
