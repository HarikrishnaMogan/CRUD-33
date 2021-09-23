
function ProfileEdit(props)
{

    let handleChange=({target:{name,value}})=>{
        if(name==="name")
        {
            props.setName(value);
        }
        if(name==="email")
        {
            props.setEmail(value);
        }
        if(name==="country")
        {
            props.setCountry(value);
        }
        if(name==="company")
        {
            props.setCompany(value);
        }
        if(name==="city")
        {
            props.setCity(value);
        }
        if(name==="address")
        {
            props.setAddress(value);
        }
      }


    return(
        <>
         <div className="card editcard mx-auto mb-5 createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="UserName"
                    value={props.name}
                    name="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Email:</label><br/>
                    <input className="form-control" type="email" placeholder="Email"
                    value={props.email}
                    name="email"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Company:</label><br/>
                    <input className="form-control" type="text" placeholder="Company"
                    value={props.company}
                    name="company"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Country:</label><br/>
                    <input className="form-control" type="text" placeholder="Country"
                    value={props.country}
                    name="country"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">City:</label><br/>
                    <input className="form-control" type="text" placeholder="City"
                    value={props.city}
                    name="city"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Address:</label><br/>
                    <input className="form-control" type="text" placeholder="Address" 
                    value={props.address}
                    name="address"
                    onChange={handleChange}
                    />
                </div>
               
                <br/>
                <div className="text-center">
                <button className="mx-auto btn btn-primary" type="submit" onClick={props.handleSubmit}>Submit</button>
                </div>
             </form>
            </div>
        </div>
        </>
    );
}

export default ProfileEdit;