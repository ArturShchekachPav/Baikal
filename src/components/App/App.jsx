import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/" element={
          <>
            <Main />
            <div className="illustration"></div>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
