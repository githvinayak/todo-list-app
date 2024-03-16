import React , {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Items(props) {
    const [line,setLine] = useState();
    const cutIt = () =>{
        setLine(true);
    };
    return(
        <>
            <div className="list_items">
            <span onClick={cutIt}>
            <DeleteIcon onClick={()=>{props.onSelect(props.id)}}/>
            </span>
            <li style={{textDecoration: line ? "line-through": "none"}}>{props.text}</li>
            </div>
        </>
        );
}

export default Items;