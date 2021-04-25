import React,{useState, useEffect} from "react";
import "./index.css";
import api from "../../server/api";

export default function Home(){

const [users, setUsers] = useState([]);

  useEffect(() => { 
    async function loadUsers(){
      api.get("/listar").then(res => {
        setUsers(res.data)
        console.log(res.data)
      })
    }
    loadUsers();
  },  []);


return (
  <div className="home-container">
    <ul>
        {users.map(user => (
            <li key={user.id}>  
                <footer>            
                  <strong>Nome: {user.nome}</strong>
                  <p>E-mail: {user.email} </p>
                </footer>
            </li>
    ))}
    </ul>
  </div>
);
}