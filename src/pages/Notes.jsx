import { useEffect, useState } from 'react';
import db from '../appwrite/databases';

function Notes() {
  const [notes, setNotes] = useState([]);

  // Run the init function when the component mounts
  useEffect(() => {
    init();
  }, []);

  // Initialize component functions
  const init = async () => {
    const response = await db.notes.list();

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
