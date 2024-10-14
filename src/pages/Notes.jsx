import { useEffect, useState } from 'react';
import { databases } from '../appwrite/config';

function Notes() {
  // Initialize component functions
  const init = async () => {
    const response = await databases.listDocuments(
      import.meta.env.VITE_COLLECTION_ID
    );
    console.log(response);
  };

  return <div>Notes</div>;
}

export default Notes;
