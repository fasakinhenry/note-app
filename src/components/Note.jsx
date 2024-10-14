// import { useState } from 'react';
// import db from '../appwrite/databases';
// import DeleteIcon from '../assets/DeleteIcon';

// function Note({ setNotes, noteData }) {
//   const [note, setNote] = useState(noteData);

//   const handleUpdate = async () => {
//     const completed = !note.completed;
//     db.notes.update(note.$id, { completed });
//     setNote({ ...note, completed: completed });
//   };

//   const handleDelete = async () => {
//     db.notes.delete(note.$id);
//     setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
//   };
//   return (
//     <div className='note-wrapper'>
//       <span className='note-body' onClick={handleUpdate}>
//         {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
//       </span>
//       <div className='delete' onClick={handleDelete}>
//         <DeleteIcon />
//       </div>
//     </div>
//   );
// }

// export default Note;

import { useState } from 'react';
import db from '../appwrite/databases';
import DeleteIcon from '../assets/DeleteIcon';

function Note({ setNotes, noteData }) {
  const [note, setNote] = useState(noteData);

  const handleUpdate = async () => {
    const completed = !note.completed;
    await db.notes.update(note.$id, { completed });
    setNote({ ...note, completed: completed });
    setNotes((prevState) => {
      const updatedNotes = prevState.map((n) =>
        n.$id === note.$id ? { ...n, completed } : n
      );
      return updatedNotes.sort((a, b) => a.completed - b.completed);
    });
  };

  const handleDelete = async () => {
    await db.notes.delete(note.$id);
    setNotes((prevState) => {
      const updatedNotes = prevState.filter((i) => i.$id !== note.$id);
      return updatedNotes.sort((a, b) => a.completed - b.completed);
    });
  };

  return (
    <div
      className={`note-wrapper ${
        note.completed ? 'bg-green-100' : 'bg-white'
      } transition-colors duration-300`}
    >
      <span className='note-body flex items-center' onClick={handleUpdate}>
        {note.completed ? (
          <>
            <span className='checkmark text-green-500 mr-2'>&#10003;</span>
            <span className='text-green-500'>{note.body}</span>
            <span className='tada-effect ml-2'>🎉</span>
          </>
        ) : (
          <>{note.body}</>
        )}
      </span>
      <div className='delete' onClick={handleDelete}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Note;
