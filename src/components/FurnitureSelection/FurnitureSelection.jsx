import Header from '../Header/Header';
import FurnitureParametersForm from '../FurnitureParametersForm/FurnitureParametersForm';
import GeneralFurnitureList from '../GeneralFurnitureList/GeneralFurnitureList';
import SearchForm from '../SearchForm/SearchForm';
import "./FurnitureSelection.css";

export default function FurnitureSelection() {
	return (
		<div className="furniture-selection container">
			<Header />
			<main className="furniture-selection__main">
				<div className="furniture-selection__search-container">
					<h2 className="furniture-selection__container-title">Выберите мебель, которую нужно привезти</h2>
					<SearchForm />
					<GeneralFurnitureList class="furniture-selection__general-furniture-list" />
				</div>
				<div className="furniture-selection__parameters-container">
					<h2 className="furniture-selection__container-title">Зачем заполните следующие поля выбранного элемента:</h2>
					<FurnitureParametersForm />
				</div>
			</main>
		</div>
	);
}