
import {Context} from "../Context";
import { useContext,useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile({match})
{
    let context = useContext(Context);
    const [user,setUser] = useState([]);

     let getuser = async()=>{
        let tempuser = context.users.filter((user)=> user.id === match.params.id);
        if(tempuser.length!==0)
        {
            setUser(tempuser);
        }
        else{
              const {data} = await axios.get(`https://611f26469771bf001785c730.mockapi.io/users/${match.params.id}`);
             console.log(data);
             setUser([data]);
        }
       
        console.log(tempuser);
     }
    
      useEffect(()=>{
         getuser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return(
        <>
        <div className="container">
           {user.map((user)=>
           {
               return  <div className="card profile mt-3" key={user.id}>
               <div className="card-body">
                   <div>
                   <h2 className="text-center profilehead">Profile<Link to={`/edit-profile/${user.id}`} className="btn btn-danger ml-3"><i className="fas fa-user-edit"></i></Link></h2>
                   </div>
                   <p><b>Name</b><br/>
                    {user.name}
                   </p>
                   <p><b>Email</b><br/>
                    {user.email}
                   </p>
                   <p><b>Company</b><br/>
                    {user.company}
                   </p>
                   <p><b>Country</b><br/>
                    {user.country}
                   </p>
                   <p><b>City</b><br/>
                    {user.city}
                   </p>
                   <p><b>Address</b><br/>
                    {user.address}
                   </p>
               </div>
           </div>
         
           })} 
          </div>
        </>
    );
}