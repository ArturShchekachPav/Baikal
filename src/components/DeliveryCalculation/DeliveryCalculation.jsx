import Main from '../Main/Main';
import FurnitureSelection from '../FurnitureSelection/FurnitureSelection';
import SelectedFurniture from '../SelectedFurniture/SelectedFurniture';
import Calculation from '../Calculation/Calculation';

export default function DeliveryCalculation({step, setStep, setDeliveryData, deliveryData, addedFurnitureList, setAddedFurnitureList}) {
	switch (step) {
		case 1:
			return (
				<>
					<Main setStep={setStep} setDeliveryData={setDeliveryData}  />
					<div className="illustration"></div>
				</>
			);
		case 2:
			return <FurnitureSelection setDeliveryData={setDeliveryData}  deliveryData={deliveryData} addedFurnitureList={addedFurnitureList} setAddedFurnitureList={setAddedFurnitureList} setStep={setStep}/>;
		case 3:
			console.log(addedFurnitureList);
			return <SelectedFurniture setDeliveryData={setDeliveryData}  deliveryData={deliveryData} addedFurnitureList={addedFurnitureList} setAddedFurnitureList={setAddedFurnitureList} setStep={setStep} />;
		case 4:
			return <Calculation />;
	}
}