"use client";

import Image from "next/image";
import Link from "next/link";

import SignInForm from "./_components/login-form";

export default function SignIn(): JSX.Element {
  // const { toast } = useToast();

  // const onSubmit: (formData: FormInputs) => void = (formData: FormInputs) => {
  //   console.log(formData);

  //   Promise.resolve(
  //     signIn("credentials", {
  //       username: formData.username,
  //       password: formData.password,
  //       callbackUrl: "/",
  //       redirect: true,
  //     }),
  //   )
  //     .then(() =>
  //       toast({ title: "Success", description: "Başarıyla giriş yaptınız." }),
  //     )
  //     .catch((error) => {
  //       toast({
  //         title: "Error",
  //         description: error.message,
  //         variant: "destructive",
  //       });
  //     });
  // };

  return (
    <div className="grid h-screen w-full grid-cols-2">
      <div className="relative col-span-1 h-full w-full py-20 pl-40 pr-10 md:pl-20 md:pr-14 xl:pl-36">
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
      <div className="col-span-1 flex h-full items-end justify-end">
        {/* <div className="relative h-full w-[500px]">
          {" "}
          <Image
            src="/images/login_bg.png"
            alt="login"
            layout="fill"
            className="z-10"
          />
          <div className="absolute left-14 top-72 z-20 h-48 w-48 rounded bg-white"></div>
          <div className="absolute left-56 top-28 z-50 h-64 w-48 rounded bg-white"></div>
        </div> */}
      </div>
    </div>
  );
}
