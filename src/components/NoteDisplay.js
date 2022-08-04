import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();


const NoteDisplay = ({ note, Delete, index, SeeMore}) => {

    
  return(
    <div className = 'card'>
    
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(note) }} 
    
  />
  <button onClick={() => Delete(index)}>supprimer</button>
  {/* <button onClick={() => SeeMore(index)}>voir</button> */}
  </div>
  );
  
};

// bien expliqué ici pour le innerHTML https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/

export default NoteDisplay;