import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const SingleNote = ({note}) => {

    
  return(
    
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(note) }} 
    
  />
  
  );
  
};

export default SingleNote;