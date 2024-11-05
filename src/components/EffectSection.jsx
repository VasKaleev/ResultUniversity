import { useEffect, useState, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "../hooks/useinput"

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async ()=>{
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    },[])
   
    useEffect(()=>{
      fetchUsers()
    },[fetchUsers])
    return (
        <section>
            <h3>Effects</h3>
            <Button style={{marginBottom: "1rem"}} onClick={()=>setModal(true)}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>hello from Modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button onClick={()=>setModal(false)}>Close modal</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading &&
                <>
                  <input type="text" className="control" {...input}/>
                  <h6>{input.value}</h6>
                  <ul>
                  {users.filter((user)=>user.name.toLowerCase().includes(input.value.toLowerCase())).map(user=><li key={user.id}>{user.name}</li>)}
                  </ul>
                </>}
        </section>
    )
}  
