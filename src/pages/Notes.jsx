import { useEffect, useState } from 'react';
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';

function Notes() {
  const [notes, setNotes] = useState([]);

  // Run the init function when the component mounts
  useEffect(() => {
    init();
  }, []);

  // Initialize component functions
  const init = async () => {
    const response = await db.notes.list([Query.orderDesc('$createdAt')]);

    setNotes(response.documents);
  };

  return (
    <div>
      <h1 className='text-xl font-bold'>Notes</h1>
      <NoteForm setNotes={setNotes} />
      <div>
        {notes.map((note) => (
          <div key={note.$id}>{note.body}</div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
