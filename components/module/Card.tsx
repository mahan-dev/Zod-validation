"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(4, "at least should be 4"),
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("hello");
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
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
