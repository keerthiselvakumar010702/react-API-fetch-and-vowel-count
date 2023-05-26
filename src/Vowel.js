import { useState } from "react"
const Vowel = ()=>{
    const [vowel,setVowel]=useState(0)
    const handleChange = event => {
        let count = 0;
         for (const c of event.target.value){
             if ("aeiou".includes(c.toLowerCase())){
                 count++;
             }
         }
         setVowel(count);
     }
    return(
        <div style={{background:"lightBlue",width:"300px",margin:"auto",marginTop:"20px",borderRadius:"10px"}}>
        <div style={{padding:"15px",textAlign:"center"}}>
        <input type="text" placeholder="Enter your text" onChange={handleChange} ></input>
        <p><b>Count of vowels: {vowel}</b> </p>
        </div>
        </div>
    )
}
export {Vowel}