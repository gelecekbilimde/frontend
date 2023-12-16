"use client";

import { signIn } from "next-auth/react";

import { useToast } from "@/components/ui/use-toast";

import LoginForm, { type FormInputs } from "./_components/login-form";

export default function SignIn(): JSX.Element {
  const { toast } = useToast();

  const onSubmit: (formData: FormInputs) => void = (formData: FormInputs) => {
    Promise.resolve(
      signIn("credentials", {
        username: formData.username,
        password: formData.password,
        callbackUrl: "/",
        redirect: true,
      }),
    )
      .then(() =>
        toast({ title: "Success", description: "Başarıyla giriş yaptınız." }),
      )
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      });
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-4xl font-semibold text-cream">Sign In</h1>
      <LoginForm onSubmit={onSubmit} />;
    </div>
  );
}
