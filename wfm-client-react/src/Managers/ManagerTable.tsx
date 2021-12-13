import axios from "axios";
import { useEffect, useState } from "react";
import { managers } from "./type";
import PopupModal from './PopupModal'

const Manager = () => {
  const username = localStorage.getItem("username");

  async function GetManagerTable() {
    try {
      const response = await axios.post("http://localhost:8000/manager/employees",{ username: username });
      setManagerData(response.data);
    } catch (e) {
      console.log("Error");
    }
  }
  
 function buttonClick(event:any){
     Setshow(!show)
     if(show!==true){

      const id=event.target.id;
      const name=event.target.name;

      Setid(id);
      Setname(name);
     }
  }

  useEffect(() => {
    GetManagerTable();
  });

  const [ManagerData, setManagerData] = useState([]);
  const [show,Setshow] = useState(false);
  const[id,Setid]=useState(0);
  const[name,Setname]=useState(0)

  return (
    <table className="table" style={{backgroundColor:"gray"}}>
      <thead>
        <tr>
          <th>EmployeeID</th>
          <th>Name</th>
          <th>Skills</th>
          <th>Profile</th>
          <th>Experience</th> 
          <th>Manager</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {ManagerData.map((x: managers) => {
          let string=(x.EmployeeID).toString();
          let Name=(x.Name).toString();
          return (
            
              <tr key={x.EmployeeID}>
                <td>{x.EmployeeID}</td>
                <td>{x.Name}</td>
                <td>{x.Skills}</td>
                <td>{x.Profile}</td>
                <td>{x.Experince}</td>
                <td>{x.Manager}</td>
                <td>
                  <button className="btn btn-primary" id={string} name={Name} onClick={buttonClick}>{x.Status}</button>
                  
                  <PopupModal show={show} toggle={buttonClick} id={id} name={name}></PopupModal>
                </td>
              </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Manager;