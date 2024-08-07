import { useState ,useEffect} from "react";
export default function Counter()
{
  let[Countx,setCountx]=useState(0);
  let[County,setCounty]=useState(0);
  let incCountx=()=>
  {
    setCountx(currcount=>currcount+1)
  };
  let incCounty=()=>
    {
      setCounty(currcount=>currcount+1)
    };
  useEffect(function print()
 {
  console.log("this is a sideeffect");
},
[Countx]
);
 return (
   <div>
    <h3>Countx={Countx}</h3>
    <button onClick={incCountx}>+1</button>

    <h3>County={County}</h3>
    <button onClick={incCounty}>+1</button>
   </div>
 );
}