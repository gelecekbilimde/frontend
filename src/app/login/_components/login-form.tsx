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
  username: string;
  password: string;
}

export default function SignInForm(): JSX.Element {
  const form = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input placeholder="E-posta" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Şifre" {...field} />
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
        <Button variant="primary" type="submit" className="w-full">
          Giriş Yap
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
