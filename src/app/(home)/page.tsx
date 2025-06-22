import { HydrateClient, trpc } from "@/trpc/server";
import {HomeView} from "@/modules/home/views/home-view";

export const dynamic = "force-dynamic";

interface PageProps {
    searchParams: Promise<{
        categoryId?: string;
    }>
}

const Page =({searchParams}: PageProps) => {
    const { categoryId } = searchParams;

    void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
        <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}

export default Page;
