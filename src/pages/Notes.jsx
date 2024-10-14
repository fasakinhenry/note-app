import { useEffect, useState } from 'react';
import { database } from '../appwrite/config';

function Notes() {
  const [notes, setNotes] = useState([]);

  // Run the init function when the component mounts
  useEffect(() => {
    init();
  }, []);

  // Initialize component functions
  const init = async () => {
    const response = await database.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID_NOTES
    );

    setNotes(response.documents);
  };

  return (
    <div>
      <div>
        <h1>Notes</h1>
        {notes.map((note) => (
          <div key={note.$id}>{note.body}</div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
