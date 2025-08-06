import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";

export default async function NotesPage() {
  const initialData = await fetchNotes({ query: "", page: 1, perPage: 12 });
  console.log(initialData);

  return <Notes initialData={initialData} />;
}
