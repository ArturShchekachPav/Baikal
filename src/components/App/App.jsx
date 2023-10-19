import './App.css';
import {Routes, Route} from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import {useState} from 'react';
import DeliveryCalculation from '../DeliveryCalculation/DeliveryCalculation';

function App() {
  const [step, setStep] = useState(1);
  const [deliveryData, setDeliveryData] = useState({});
  const [addedFurnitureList, setAddedFurnitureList] = useState([]);
  
  return (
    <div className="app">
      <Routes>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/" element={<DeliveryCalculation step={step} setStep={setStep} setDeliveryData={setDeliveryData} deliveryData={deliveryData} setAddedFurnitureList={setAddedFurnitureList} addedFurnitureList={addedFurnitureList}/>} />
      </Routes>
    </div>
  );
}

export default App;
