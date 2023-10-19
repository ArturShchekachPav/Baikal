import Header from '../Header/Header';
import DeliveryData from '../DeliveryData/DeliveryData';
import './SelectedFurniture.css';
import Table from '../Table/Table';
import { ScrollPanel } from 'primereact/scrollpanel';
import {
	useEffect,
	useRef,
	useState
} from 'react';

export default function SelectedFurniture({setStep, setDeliveryData, setAddedFurnitureList, addedFurnitureList, deliveryData}) {
	const [availableHeight, setAvailableHeight] = useState(0);
	const mainRef = useRef(null);
	const titleRef = useRef(null);
	
	useEffect(() => {
		if (mainRef.current) {
			const titleHeight = titleRef.current.clientHeight;
			const mainHeight = mainRef.current.clientHeight;
			const remainingHeight = mainHeight - titleHeight - 58 - 40 - 48;
			setAvailableHeight(remainingHeight);
		}
	}, []);
	
	return (
		<div className="selected-furniture container">
			<Header>
				<DeliveryData setDeliveryData={setDeliveryData} deliveryData={deliveryData}/>
			</Header>
			<main className="selected-furniture__main" ref={mainRef}>
				<h1 className="selected-furniture__title" ref={titleRef}>{`Добавленная мебель (${addedFurnitureList.length})`}</h1>
				<ScrollPanel style={{ width: '100%', height: `${availableHeight}px`}} className={`general-furniture-list furniture-selection__general-furniture-list`}>
					<Table addedFurnitureList={addedFurnitureList} setAddedFurnitureList={setAddedFurnitureList} />
				</ScrollPanel>
				<div className="selected-furniture__buttons">
					<button className="selected-furniture__button selected-furniture__button_add" onClick={() => setStep(2)}>Добавить</button>
					<button className="selected-furniture__button"  onClick={() => setStep(4)}>Рассчитать</button>
				</div>
			</main>
		</div>
	);
}