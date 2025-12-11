import { RefObject } from "react";
import { toast } from "sonner";
import * as z from "zod";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(4, "password should be 4 characters long or more"),
});
export type LoginForm = z.infer<typeof loginSchema>;

export const submitHandler = (formRef: RefObject<LoginForm>) => {
  const data: LoginForm = formRef.current as LoginForm;

  try {
    loginSchema.parse(data);
    toast.success("Login successfully ! 👏", { position: "top-center" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast.error(error.issues[0].message, { position: "top-center" });
    }
  }
};
