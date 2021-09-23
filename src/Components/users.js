import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import axios from "axios";

    
    import "./components.css";

function Users()
{
    //using context to get the users
     let context = useContext(Context);

     //to get the userid to delete
    let deleteid;
    let getdeleteid=(id)=>{
         deleteid = id;
    }

     // to delete user in api
   let deleteuser= async()=>{
          const {data} = await axios.delete(`https://611f26469771bf001785c730.mockapi.io/users/${deleteid}`);
         console.log(data);
         let tempusers = context.users.filter((x)=>x.id !== deleteid );
         context.setUsers(tempusers);
   } 

    return(
        <>
        <div className="container-fluid">
            <h1 className="usershead">All Users</h1>
            <div className="user-grid">
           {
               context.users.map((user)=>{
                   return    <div className="card mx-auto usercard my-5" key={user.id} >
                    <div className="card-body">
                    <div className="image"><img src={user.avatar} alt="avatar"/></div>
                        <div className="row">
                        <div className="col-md-12 my-2 text-center">
                        <h3 className="text-dark font-weight-bold">{user.name}
                        </h3>
                        </div>
                       <div className="col-md-12  my-2 text-center mb-2 ">
                         
                       <Link to={`edit-profile/${user.id}`} className="btn btn-dark  "><i className="fas fa-user-edit"></i></Link>
                       
                       </div>
                        
                        </div>
                        <p><b>Email</b><br/>{user.email}</p>
                        <p><b>Country</b><br/>{user.country}</p>
                        <div className="mt-2 d-flex flex-column justify-content-center" >
                            <Link to={`edituser/${user.id}`} className="btn  mt-2  btn-outline-primary mx-2">Edit User</Link>
                            <Link to={`profile/${user.id}`} className="btn   mt-2 btn-dark  mx-2">Profile</Link>
                            <button className="btn btn-danger  mt-2 mx-2" data-toggle="modal" data-target="#mymodal" onClick={()=>getdeleteid(user.id)} >Delete</button>
                        </div>   
                    </div>
                   </div> 
               })
           } 

           <div className="modal  fade" id="mymodal">
               <div className="modal-dialog modal-lg">
                   <div className="modal-content">
               <div className="modal-body">
                   Are you sure, You want to delete User?
               </div>
               <div className="modal-footer">
                   <button className="btn btn-danger" data-dismiss="modal" onClick={deleteuser} >Delete</button>
                   <button className="btn btn-info" data-dismiss="modal" >Cancel</button>
               </div>
               </div>
               </div>
           </div>
           </div>
          </div>
        </>
    );
}
export default Users;