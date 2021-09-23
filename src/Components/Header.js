import {NavLink} from "react-router-dom";
import "./components.css";
function Header()
{
    return(
        <>
          <div className="header">
              <input type="checkbox" id="check"/>
              <label id="label" for="check">
            <span className="brand"><i className="fas fa-hamburger crudicon"></i>CRUD</span>
            </label>
            <div className="headermove">
              <div className="navdiv">
                  <NavLink exact to="/" className="navlink brand" activeClassName="activenavlink">Users</NavLink>
              </div>
              <div className="navdiv">
              <NavLink to ="/createuser" className="navlink" activeClassName="activenavlink">Create User</NavLink>
              </div>
            </div>
            </div>
        </>
    );
}
export default Header;