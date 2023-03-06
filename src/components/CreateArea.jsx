import React ,{useState} from "react";
// import notes from "../Keep";

function CreateArea(props) {

const[name , setName] = useState({
  title : " ",
    content : " "
})


function updatedValue(event){
const {name ,value } =event.target;

setName((prevNote) =>{
return {...prevNote,
   [name]:value};
} );
}

function printNote(event){
    props.onAdd(name);
    event.preventDefault();

}


  return (
    <div>
      <form>
        <input onChange =  {updatedValue} name="title" value = {name.title} placeholder="Title" />
        <textarea onChange = {updatedValue} name="content"  value = {name.content} placeholder="Take a note..." rows="3" />
        <button onClick={printNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;