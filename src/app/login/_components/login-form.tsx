"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface FormInputs {
  email: string;
  password: string;
}

export default function SignInForm(): JSX.Element {
  const form = useForm<FormInputs>({
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormInputs) => {
    setError(null);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/");
      router.refresh();
      return;
    }

    setError("E-posta veya şifre hatalı.");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "E-posta zorunludur." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="E-posta"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          rules={{ required: "Şifre zorunludur." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Şifre"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-10 flex justify-between">
          <div className="flex items-center gap-x-2">
            <Checkbox />
            <span className="text-sm text-slate-500">Beni Hatırla</span>
          </div>
          <Button className="text-slate-500" variant="link" size="sm">
            Şifremi Unuttum
          </Button>
        </div>
        {error ? (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        ) : null}
        <Button
          variant="primary"
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
        </Button>
        <div className="flex items-center justify-start">
          <span className="text-sm text-slate-500">
            Hesabınız zaten var mı ?{" "}
          </span>
          <Button
            variant="link"
            size="sm"
            className="pl-1 text-sm text-primary"
          >
            Giriş Yapın.
          </Button>
        </div>
      </form>
    </Form>
  );
}
