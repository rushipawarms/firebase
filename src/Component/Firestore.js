import React,{useState,useEffect} from 'react'
import { storage } from '../firebase';
function Firestore() {
    const [file,setfile]=useState('');
    let uploadFile=()=>{

        let uploadTask=storage.ref(`/data/${file.name}`).put(file);
        uploadTask.on('state_changed',f1,f2,f3);
        function f1(snapshot)
        {
            let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progress);
        }
        function f2(error){
            console.log("error",error);
        }
        function f3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
            })

        }
    }
    return (
        <div>
        <label htmlFor='file'>File </label>
        <input type="file" accept="image/*" onChange={(e)=>setfile(e.target.files[0])}></input>
        <button onClick={uploadFile}>Upload</button>
        </div>
    )
}

export default Firestore
