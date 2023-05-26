//import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import { Details } from './Details';
import { Vowel } from './Vowel';
 
function App() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    (async () => {
      let userData;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
    //  // setAllUsers(userData.results);
       setUsers(userData);
    })();
  }, []);
  return (
    <div className="App">
      <h1 className='title'>DETAILS</h1>
    {users.map((user, index) => (
        <Details key={index} userData={user} />
       
        ))}
        <Vowel/>
    </div>
  );
}

export default App;
