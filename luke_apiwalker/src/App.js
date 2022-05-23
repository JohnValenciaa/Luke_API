import './App.css';
import {Link, Routes, Route} from 'react-router-dom'
import Character from './components/Character';
import Error from './components/Error';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      {/* <h1>
        <Link to={"/people/1"}>Character Page</Link>
        <Link to={"/error"}>Error Page</Link>
      </h1> */}
      <Routes>
        <Route path="/:category/:varId" element={<Character />}/>
        <Route path="/error" element={<Error />}/>
        {/* <Route path="/form" element={<Form />}/> */}
      </Routes>
    </div>
  );
}

export default App;
