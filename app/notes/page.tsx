import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";

export default async function NotesPage() {
  const initialData = await fetchNotes({ query: "", page: 1, perPage: 12 });

  return <Notes initialData={initialData} />;
}
