import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import Keep from "../Keep";

// key: 1,
// title: "Delegation",
// content:
//   "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
function  Notes(Noted){
return <Note 
key = {Noted.id}
title = {Noted.title}
content = {Noted.content}

/>

}



function App(){
const [names ,setNames] = useState([]);



function newNote(note){
setNames( prevNote => {
return [...prevNote,note];
});
}
function deleteNote(id){
 setNames(prevNote=> {
    return prevNote.filter((nameitem,index)=>{
        return index !==id;
    });
 });

}


return <div>
    <Header/>
    <CreateArea
    onAdd = {newNote} />
    {names.map((namesitem,index)=>{
    return <Note 
    key = {index}
    id = {index}
    title = {namesitem.title}  
    content = {namesitem.content}/>})}



         <Footer/>
    
    </div>


}
export default App;