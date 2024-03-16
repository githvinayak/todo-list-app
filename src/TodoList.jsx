import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import "./index.css";
import Items from "./Items";
function TodoList() {
 const [listItem , setlistItem] = useState("");
 const [item, setItems] = useState([]);
 const InputEvent = (event) =>{
    console.log(event.target.value);
    setlistItem(event.target.value);
 }
 function listofItem(){
setItems((oldVal)=>{
    return [...oldVal, listItem]
});
    setlistItem("");
 }
 const deleteItems=()=>{
    console.log("deleted");
};
    return(
<>
<div className="main_div">
    <div className="center_div">
        <h1>TODO LIST</h1>
        <br/>
        <div className="buttons">
            <input type="text" onChange={InputEvent} name="item" value={listItem} placeholder="add items" />
            <button className="btn" onClick={listofItem}><AddIcon/></button> 
        </div>
        <ol>
        {
            item.map((itemVal,index)=>{
              return <Items 
                id={index}
                key={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            })
          }
        </ol>
    </div>
</div>
</>
    );
}

export default TodoList;