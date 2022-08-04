import { useState, useEffect } from "react";
import NoteDisplay from "./NoteDisplay";
import SingleNote from "./SingleNote";
import SeeMore from './SeeMore';


const MarkdownInput = () => {
    const [monState, setMonState] = useState(JSON.parse(localStorage['bloc-note']) || []);
    const [note, setNote] = useState();


const allNote = (event) => {
event.preventDefault();
const tab = [...monState, {note: note}]
setMonState(tab)
}


const Save = () => {
    localStorage.setItem('bloc-note', JSON.stringify(monState));
    console.log(localStorage.getItem('bloc-note'))  
}

const Delete = (index) => {
    const tab = [...monState];
    console.log(index)

setMonState(tab.filter(item =>tab.indexOf(item) !== tab.indexOf(tab[index])))
}




    return (
        <div className ="container">
       

            <div className='sidebar'>
                <h2>Liste des notes</h2>

{
monState.map((todo, index) => (
<NoteDisplay  
note= {todo.note}
index = {index}
key = {index}
Delete = {Delete}
SeeMore = {SeeMore}/>

)
)
}
</div>

<div className = 'note-container'>

    <div className = 'note-view'>
<SingleNote 
note={note}/>
</div>
           
           <div className = 'note-form'>
            <form onSubmit={allNote}>
              <div className ='field'>
                <div className ='control'>
                    <label htmlFor ='note'></label>
                    <textarea className='textarea'
                    type ='text' 
                    id='note'
                    placeholder ='tapez votre note'
                    onChange = {event => setNote(event.target.value)}
                    ></textarea>
                </div>
              </div>
              <button onClick={Save}type='submit'>Sauvegarder</button>
            </form>
            </div>

            </div>
           
           
           
        </div>
        
        
    );
    
}

export default MarkdownInput;