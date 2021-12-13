import Login from "../Login";
import Manager from "./ManagerTable";

const ManagerHome=()=>{
    const username =  localStorage.getItem("username")
    return (
      <div style={{backgroundColor:"gray",backgroundSize:"auto",height:"665px"}}>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" style={{}} >Manager Home Screen</a>
            <form className="form-inline my-2 my-lg-0">
                <a className="navbar-brand"><b>{username}</b></a>
                <button className="btn btn-danger" onClick={()=>
                {
                  if(username)
                    return  [localStorage.clear(),Login]
                }}>SignOut</button>  
            </form>
        </nav>
        <Manager/>
      </div>
    )
}

export default ManagerHome;