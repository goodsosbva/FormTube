import { createTRPCRouter, procedureProcedure  } from "../init";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import {z} from "zod";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
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
