import React from "react";
// import Keep from "../Keep";
// key: 1,
// title: "Delegation",
// content:
//   "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"


function Note(prop){
function handleClick(){
 prop.onDelete(prop.id);
}


return <div className="note" >
    <h3>
 {prop.title}
</h3>
<p>{prop.content}</p>
<button onClick={handleClick}>Delete</button>
</div>


}
export default Note;