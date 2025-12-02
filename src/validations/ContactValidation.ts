import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(
      1,
      "A wizard without a name? Impossible! Tell me who you are, young one."
    ),
  email: z
    .string()
    .min(1, "Even muggles remember their email… try again!")
    .email("That email looks cursed… try something more earthly."),
  message: z
    .string()
    .min(
      1,
      "You want to speak, yet you say nothing? Write your message, dear wizard."
    ),
});

export type FormValues = z.infer<typeof formSchema>;
