import { fetchNoteById } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { PageProps } from "@/.next/types/app/page";

type Props = PageProps & {
  params: { id: string };
};

export default async function NoteDetails({ params }: Props) {
  const queryClient = new QueryClient();
  const noteId = String(params.id);

  await queryClient.prefetchQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
