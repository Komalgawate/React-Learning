import {useState} from "react";
export default function Forms()
{
  let[Formdata,setFormdata]=useState({
    fullname:"",
     username:"",
     password:""
    });

    let handleInputchange=(event)=>
    {
      setFormdata((currData)=>
      {
        return { ...currData,[event.target.name]:event.target.value};
      });
    };
    
    let handleSubmit=(event)=>
    {
      event.preventDefault();
      console.log(Formdata);
      setFormdata({
        fullname:"",
         username:""
      });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>&nbsp;&nbsp;
            <input placeholder="Enter Your Fullname" type="text" 
            value={Formdata.fullname} 
            onChange={handleInputchange}
            name="fullname"
            id="fullname"
            />
            <br/><br/>
            <label htmlFor="username">Username</label>&nbsp;&nbsp;
            <input placeholder="Enter Your Username" type="text" 
            value={Formdata.username} 
            onChange={handleInputchange}
            name="username"
            id="username"/>
            <br/><br/>
            <label htmlFor="password"> Password</label>&nbsp;&nbsp;
            <input placeholder="Enter Your Password" type="password" 
            value={Formdata.password} 
            onChange={handleInputchange}
            name="password"
            id="password"
            />
            <br/><br/>
        <button>Submit</button>
        </form>
    )
}