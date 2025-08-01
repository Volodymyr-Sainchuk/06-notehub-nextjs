import { fetchNoteById } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

type Props = {
  params: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
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
