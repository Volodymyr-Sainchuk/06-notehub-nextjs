import { Suspense } from "react";
import Notes from "./Notes.client";

export default function NotesPage() {
  return (
    <Suspense fallback={<p>Завантаження...</p>}>
      <Notes />
    </Suspense>
  );
}
