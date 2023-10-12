import Main from '../Main/Main';
import FurnitureSelection from '../FurnitureSelection/FurnitureSelection';
import SelectedFurniture from '../SelectedFurniture/SelectedFurniture';
import Calculation from '../Calculation/Calculation';

export default function DeliveryCalculation({step, setStep, setDeliveryData}) {
	switch (step) {
		case 1:
			return (
				<>
					<Main setStep={setStep} setDeliveryData={setDeliveryData}  />
					<div className="illustration"></div>
				</>
			);
		case 2:
			return <FurnitureSelection />;
		case 3:
			return <SelectedFurniture />;
		case 4:
			return <Calculation />;
	}
}