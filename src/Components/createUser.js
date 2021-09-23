import "./components.css";
import axios from "axios";
import {useState,useContext} from "react";
import {Context} from "../Context";

import EditAndCreateUser from "./subComponents/EditAndCreateUser";
function CreateUser(props)
{
  
    const [name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[country,setCountry] = useState("");
     const context = useContext(Context);
     const[useradded,setUseradded] = useState(true);
    //to post user to API
   let postuser= async()=>{
      const{data} = await axios.post("https://611f26469771bf001785c730.mockapi.io/users",
      {
          name:name,
          email:email,
          country:country
      });
    
      console.log(data);
      let tempusers = [...context.users];
      tempusers.push(data);
      console.log(tempusers);
      context.setUsers(tempusers);
      setUseradded(false);
     // props.history.push("/"); if this line is uncommented, on submit the form it will redirect the page to users page

   }



     //handling the form submit
     let handleSubmit =(event)=>{
           event.preventDefault();
          
           postuser();
     }

    

    return(
        <>
        <div className="container">
        {useradded ? (<>
            <h1 className="text-center text-info">Create User</h1>
            <EditAndCreateUser
              name={name}
              email={email}
              country={country}
              setName={setName}
              setEmail={setEmail}
              setCountry={setCountry}
              handleSubmit={handleSubmit}
            />
        </>)
        :
        (
        <>
        <div className="confirmtext">
        <h1>User added</h1>
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
       
        </div>
        </>
    );
}
export default CreateUser;