"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { LoginForm, submitHandler } from "@/helper/submitHandler";
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

  const formRef = useRef<LoginForm>(form);
  useEffect(() => {
    formRef.current = form;
  }, [form]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const enterHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") submitHandler(formRef);
  };

  useEffect(() => {
    window.addEventListener("keydown", enterHandler);
    return () => {
      window.removeEventListener("keydown", enterHandler);
    };
  }, []);

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
        <form onSubmit={(e) => e.preventDefault()}>
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
        <Button
          className="w-full cursor-pointer"
          onClick={() => submitHandler(formRef)}
        >
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
