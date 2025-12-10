"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

export function CardModule() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(4, "password should be 4 characters long or more"),
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  type LoginForm = z.infer<typeof loginSchema>;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const data: LoginForm = form;

    try {
      const dataResult = loginSchema.parse(data);
      console.log(dataResult);
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message, { position: "top-center" });
      }
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button
            variant="link"
            className=" text-[1.1rem] underline-offset-[6px]"
          >
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[0.9rem] font-bold">
                Email
              </Label>
              <Input
                className="font-bold"
                id="email"
                type="email"
                placeholder="test@example.com"
                onChange={changeHandler}
                value={form.email}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-[0.9rem] font-bold">
                  Password
                </Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-[6px] hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                className="font-bold "
                id="password"
                type="password"
                placeholder="password"
                onChange={changeHandler}
                value={form.password}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={submitHandler} type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
