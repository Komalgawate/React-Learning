import { useEffect, useState } from "react";
export default function Jokes()
{  
  let [Jokes,setJokes]=useState({});
  let URL="https://official-joke-api.appspot.com/random_joke";
  const getJoke=async()=>  
    {
      let response=await fetch(URL);
      let jsonresponse=await response.json();
      setJokes({setup:jsonresponse.setup,punchline:jsonresponse.punchline});
    };
     useEffect(()=>{async function getFisrtjoke()
    {
      let response=await fetch(URL);
      let jsonresponse=await response.json();
      console.log(jsonresponse);
      setJokes({setup:jsonresponse.setup,punchline:jsonresponse.punchline});
   }
   getFisrtjoke();
 },[]);
  return(
    <div>
      <h3>Joker!</h3>
      <h2>{Jokes.setup}</h2>
      <h2>{Jokes.punchline}</h2>
      <button onClick={getJoke}>New Joke</button>
    </div>
  )
}