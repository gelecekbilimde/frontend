import { type SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

export interface FormInputs {
  username: string;
  password: string;
}

interface Properties {
  onSubmit: SubmitHandler<FormInputs>;
}

export default function SignInForm({ onSubmit }: Properties): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form
      className="flex flex-col content-center items-center gap-4 px-12 pt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="w-full" htmlFor="LoginUsernameControl">
        <h3 className="pb-2 ps-2 text-base font-semibold text-cream">
          Username
        </h3>
        <input
          className="w-full rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2 font-medium text-zinc-700 focus:border-blue-500 focus:outline-none"
          placeholder="Enter your username"
          id="LoginUsernameControl"
          aria-invalid={errors.username === undefined ? "false" : "true"}
          {...register("username", { required: true })}
        />
        {errors.username !== undefined && (
          <p role="alert" className="pt-2 text-xs text-red-600">
            {errors.username?.type === "required" && "Username is required."}
          </p>
        )}
      </label>
      <label className="w-full" htmlFor="LoginPasswordControl">
        <h3 className="pb-2 ps-2 text-base font-semibold text-cream">
          Password
        </h3>
        <input
          className="w-full rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2 font-medium text-zinc-700 focus:border-blue-500 focus:outline-none"
          placeholder="Enter your password"
          type="password"
          id="LoginPasswordControl"
          aria-invalid={errors.password === undefined ? "false" : "true"}
          {...register("password", { required: true, minLength: 7 })}
        />
        {errors.password !== undefined && (
          <p role="alert" className="pt-2 text-xs text-red-600">
            {errors.password?.type === "required" && "Password is required."}
            {errors.password?.type === "minLength" &&
              "Password should be longer than 7 characters."}
          </p>
        )}
      </label>
      <Button type="submit">Login</Button>
    </form>
  );
}
