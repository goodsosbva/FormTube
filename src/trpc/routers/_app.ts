import { z } from "zod";
import { baseProcedure, createTRPCRouter, procedureProcedure } from "../init";
import { TRPCError } from "@trpc/server";

export const appRouter = createTRPCRouter({
  hello: procedureProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      console.log({ dbUser: opts.ctx.user });
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
