import { async } from '@firebase/util';
import React,{useState,useEffect} from 'react';
import { database } from '../firebase';

function Firebase() {
    const [userName,setname]=useState('');
    const [Age,setAge]=useState('');
    const [count,setcount]=useState(0);
    let create=async()=>{
       // let res=await database.users.add({userName,Age});
       let res=await database.users.doc('1').set({userName,Age})
        console.log(res);
    }
    let updateuser=async()=>{
        let uid='1';
        let res=await database.users.doc(uid).update({userName,Age});
    }
    let deleteuser=async()=>{
        let uid='4Timgoa4yXWKE2t57naX';
        let res=await database.users.doc(uid).delete();
    }
    let geteuser=async()=>{
        let uid='1';
        let res=await database.users.get();
       res.forEach(element => {console.log(element.data())
           
       });
    }
    return (
        <div>
            <label htmlFor="text">Name</label>
            <input type="text" value={userName} onChange={(e)=>setname(e.target.value)} />
            <label htmlFor="number">Age</label>
            <input type="number" value={Age} onChange={(e)=>setAge(e.target.value)} /> 
            <button onClick={create}>ADD</button>
            <button onClick={deleteuser}>Delete</button>
            <button onClick={updateuser}>Update</button>
            <button onClick={geteuser}>Get</button>
        </div>
    )
}

export default Firebase
