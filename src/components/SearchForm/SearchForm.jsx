import './SearchForm.css';

export default function SearchForm() {
	return (
		<form className="search-form">
			<input className="search-form__input" type="text" placeholder="Введите название" />
			<button className="search-form__submit" type="submit">Поиск</button>
		</form>
	);
}