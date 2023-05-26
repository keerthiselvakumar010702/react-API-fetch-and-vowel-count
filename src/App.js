
import {Routes,Route} from 'react-router-dom'
import { Data } from './Components/Data';
//import Edituser from './Components/Edituser'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
     
      <Route path='/' element={<Data/>} />  
      {/* <Route path='/edituser/:id' element={<Edituser/>} />   */}
      </Routes>
      </header>
    </div>
  );
}

export {App};