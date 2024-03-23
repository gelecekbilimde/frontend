"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { useToast } from "@/components/ui/use-toast";

import SignInForm, { type FormInputs } from "./_components/login-form";

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
    <div className="grid h-screen w-full grid-cols-2">
      <div className="relative col-span-1 h-full w-full py-20 pl-20">
        <Link href="/">
          <Image src="/images/icon.svg" alt="logo" width={80} height={80} />
        </Link>
        <div className="mt-12 flex-col gap-y-5">
          <h1 className="text-4xl font-bold">Giriş Yap</h1>
          <p className="text-slate-400">
            Giriş yap ve bilimden haberdar ol, bilimle kal.
          </p>
        </div>
        <div className="mt-20">
          <SignInForm />
        </div>
        <div className="absolute bottom-5">
          <span className="text-sm text-slate-500">
            ®2024 Gelecek Bilimde Tüm hakları saklıdır.
          </span>
        </div>
      </div>
      <div className="col-span-1 h-full">right</div>
    </div>
  );
}
