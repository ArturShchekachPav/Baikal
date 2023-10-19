import Header from '../Header/Header';
import FurnitureParametersForm from '../FurnitureParametersForm/FurnitureParametersForm';
import GeneralFurnitureList from '../GeneralFurnitureList/GeneralFurnitureList';
import SearchForm from '../SearchForm/SearchForm';
import "./FurnitureSelection.css";
import DeliveryData from '../DeliveryData/DeliveryData';
import {TYPES_OF_FURNITURE} from '../../utils/constants';
import {useState} from 'react';

export default function FurnitureSelection({deliveryData, setDeliveryData, setAddedFurnitureList, addedFurnitureList, setStep}) {
	const [furnitureList, setFurnitureList] = useState(TYPES_OF_FURNITURE);
	const [selectedFurniture, setSelectedFurniture] = useState(null)
	
	return (
		<div className="furniture-selection container">
			<Header>
				<DeliveryData deliveryData={deliveryData} setDeliveryData={setDeliveryData}/>
			</Header>
			<main className="furniture-selection__main">
				<div className="furniture-selection__search-container">
					<h2 className="furniture-selection__container-title">Выберите мебель, которую нужно привезти</h2>
					<SearchForm setFurnitureList={setFurnitureList} allFurniture={TYPES_OF_FURNITURE} />
					<GeneralFurnitureList class="furniture-selection__general-furniture-list" furnitureList={furnitureList} setSelectedFurniture={setSelectedFurniture}/>
				</div>
				<div className="furniture-selection__parameters-container">
					<h2 className="furniture-selection__container-title">Зачем заполните следующие поля выбранного элемента:</h2>
					{selectedFurniture ? <FurnitureParametersForm furniture={selectedFurniture} setAddedFurnitureList={setAddedFurnitureList} addedFurnitureList={addedFurnitureList} setStep={setStep}/> : <p>Вы не выбрали пока ни одного элемента.</p>}
				</div>
			</main>
		</div>
	);
}