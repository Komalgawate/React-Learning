import {useState} from "react";
export default function Ludoboard()
{
    
    let[moves,setmoves]=useState({blue:0,yellow:0,red:0,green:0});
    let updateBlue=()=>
    {
    console.log(`moves=${moves.blue}`);
     setmoves({...moves,blue:moves.blue+1});
    }
    let updateyellow=()=>
        {
        console.log(`moves=${moves.yellow}`);
         setmoves({...moves,yellow:moves.yellow+1});
        }
    let updategreen=()=>
            {
            console.log(`moves=${moves.green}`);
             setmoves({...moves,green:moves.green+1});
            }
    let updatered=()=>
                {
                console.log(`moves=${moves.red}`);
                 setmoves({...moves,red:moves.red+1});
                }
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
            <p>Blue Moves={moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor:"blue",color:"white"}}>+1</button>
            <p>Yellow Moves={moves.yellow}</p>
            <button onClick={updateyellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            <p>Red Moves={moves.red}</p>
            <button onClick={updatered} style={{backgroundColor:"red",color:"white"}}>+1</button>
            <p>Green Moves={moves.green}</p>
            <button onClick={updategreen} style={{backgroundColor:"green",color:"white"}}>+1</button>

            </div>
        </div>
    )
}