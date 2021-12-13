import { useState } from "react"
import { Redirect } from "react-router";



const Login = ({token,usertype,performLogin}:any)=>{

  const [user,setUser]=useState("")
  const [pass,setPass]=useState("")
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
    return (
      <body style={{backgroundColor:"grey",backgroundSize:"auto",padding:"182px"}}>
  <div className="card" 
  style={{width: "400px", minHeight: "300px",position: "relative", top:"10px",left:"30%" 
  ,padding: "20px", color:"darkblue",backgroundColor:"darkgrey"}}>
    <h3> Work Force Management </h3>
        <form style={{backgroundColor:"darkgrey"}}>
  <div className="mb-3 mt-3">
 
    <input type="text" className="form-control" 
    value={user}
    placeholder="Enter UserName"
     onChange={(x:any)=>setUser(x.target.value)}
     />
  </div>
  <div className="mb-3">
  
    <input type="password" 
    className="form-control"
     value={pass}
     onChange={(x:any)=>setPass(x.target.value)}
    placeholder="Enter Password"
    name="pswd"/>
  </div>
 
  <button type="button" className="btn btn-primary" onClick={()=>performLogin({
    username:user,password:pass
  })}>SignIn</button>
</form>
</div>
</body>
    )
}

export default Login