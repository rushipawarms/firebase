import { auth } from "../firebase";

import React,{useState,useEffect} from 'react'
import { async } from "@firebase/util";

function Fireauth() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const[user,setuser]=useState('');
    let Create=async()=>{
        let resp= await auth.createUserWithEmailAndPassword(email,password);
        console.log(resp);
    }
    useEffect(()=>{
        let unsub=auth.onAuthStateChanged((user)=>
            setuser(user))
            return()=>{
                unsub();
            }
        },[])
        let logout=async()=>{
            await auth.signOut();
        }
        let signin=async()=>{
            await auth.signInWithEmailAndPassword(email,password);
        }
    return (
        <>
        {
            user==null?
        <div>
        <label htmlFor="Email">Email</label>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <label htmlFor="password" >Password</label>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
        <button onClick={Create}>Create</button>
        <button onClick={signin}>Sign In</button>
        </div>:
        <div>
            <button onClick={logout}>log Out</button>
        </div>
        }
        </>
    )
}

export default Fireauth
