// "use client";

// import { trpc } from "@/trpc/client";
import { HydrateClient, trpc } from "@/trpc/server";
import PageClient from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  // const { data } = trpc.hello.useQuery({ text: "KHS" });
  // const data = await trpc.hello({ text: "khs " });
  void trpc.hello.prefetch({ text: "kHs" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
